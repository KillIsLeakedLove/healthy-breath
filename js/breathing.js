function initBreathing(config) {
  const breathCircle = document.getElementById('breathCircle');
  const breathLabel = document.getElementById('breathLabel');
  const timer = document.getElementById('timer');
  const actionBtn = document.getElementById('actionBtn');
  const cycleSelect = document.getElementById('cycleSelect');
  const ringProgress = document.querySelector('.ring-progress');
  const ringCircle = ringProgress ? ringProgress.querySelector('circle') : null;
  const cycleInfo = document.getElementById('cycleInfo');
  const soundToggle = document.getElementById('soundToggle');
  const phaseDots = document.querySelectorAll('.phase-dot');
  const elapsedStat = document.getElementById('elapsedStat');
  const celebration = document.getElementById('celebration');

  const CIRCUMFERENCE = 848;
  const PHASES = config.phases;

  let isRunning = false;
  let isPaused = false;
  let currentCycle = 0;
  let totalCycles = 5;
  let currentPhase = 0;
  let countdownInterval = null;
  let phaseTimeout = null;
  let phaseStartTime = 0;
  let remainingPhaseTime = 0;
  let sessionStartTime = 0;
  let elapsedInterval = null;
  let audioCtx = null;

  function ensureAudio() {
    if (!audioCtx && soundToggle && soundToggle.checked) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  function playTone(freq, duration, type, volume) {
    if (!audioCtx || !soundToggle || !soundToggle.checked) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type || 'sine';
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(volume || 0.06, audioCtx.currentTime + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + (duration || 0.3));
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + (duration || 0.3));
  }

  function playPhaseSound(phaseIndex) {
    const tones = [329.63, 392.00, 261.63, 196.00];
    playTone(tones[phaseIndex] || 261.63, 0.35, 'sine', 0.05);
  }

  function playStartSound() {
    playTone(261.63, 0.18, 'sine', 0.04);
    setTimeout(() => playTone(329.63, 0.18, 'sine', 0.04), 120);
    setTimeout(() => playTone(392.00, 0.25, 'sine', 0.04), 240);
  }

  function playFinishSound() {
    playTone(392.00, 0.18, 'sine', 0.04);
    setTimeout(() => playTone(493.88, 0.18, 'sine', 0.04), 120);
    setTimeout(() => playTone(587.33, 0.35, 'sine', 0.04), 240);
  }

  function updateRingProgress(phaseDuration, startTime) {
    if (!ringCircle) return;
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / phaseDuration, 1);
    const offset = CIRCUMFERENCE - (progress * CIRCUMFERENCE);
    ringCircle.style.strokeDashoffset = offset;
  }

  function updateCountdown(phaseDuration, startTime) {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, Math.ceil((phaseDuration - elapsed) / 1000));
    timer.textContent = remaining;
  }

  function updatePhaseDots() {
    phaseDots.forEach((dot, i) => {
      dot.classList.remove('active', 'completed');
      if (i < currentPhase) {
        dot.classList.add('completed');
      } else if (i === currentPhase) {
        dot.classList.add('active');
      }
    });
  }

  function clearAllAnimations() {
    if (!breathCircle) return;
    const classes = ['inhale','hold','exhale','hold-empty','inhale-slow','hold-slow','exhale-slow','hold-empty-slow','inhale-fast','exhale-long','hold-long','inhale-478','hold-478','exhale-478','inhale-r','hold-r','exhale-r','hold-empty-r'];
    classes.forEach(c => breathCircle.classList.remove(c));
  }

  function updateElapsed() {
    if (!elapsedStat || !isRunning) return;
    const elapsed = Math.floor((Date.now() - sessionStartTime) / 1000);
    const min = Math.floor(elapsed / 60).toString().padStart(2, '0');
    const sec = (elapsed % 60).toString().padStart(2, '0');
    elapsedStat.textContent = `${min}:${sec}`;
  }

  function runPhase() {
    if (!isRunning || isPaused) return;

    if (currentPhase >= PHASES.length) {
      currentPhase = 0;
      currentCycle++;

      if (totalCycles !== 999 && currentCycle >= totalCycles) {
        finishSession();
        return;
      }
    }

    const phase = PHASES[currentPhase];
    clearAllAnimations();
    void breathCircle.offsetWidth;

    breathCircle.classList.add(phase.class);
    breathLabel.textContent = phase.name;
    updatePhaseDots();
    playPhaseSound(currentPhase);

    phaseStartTime = Date.now();
    timer.textContent = Math.ceil(phase.duration / 1000).toString();

    countdownInterval = setInterval(() => {
      updateCountdown(phase.duration, phaseStartTime);
      updateRingProgress(phase.duration, phaseStartTime);
    }, 50);

    phaseTimeout = setTimeout(() => {
      clearInterval(countdownInterval);
      currentPhase++;
      runPhase();
    }, phase.duration);
  }

  function startSession() {
    isRunning = true;
    isPaused = false;
    currentCycle = 0;
    currentPhase = 0;
    totalCycles = parseInt(cycleSelect.value);
    sessionStartTime = Date.now();

    cycleSelect.disabled = true;
    actionBtn.textContent = '暂停';
    actionBtn.classList.remove('btn-start', 'btn-restart');
    actionBtn.classList.add('btn-pause');

    ensureAudio();
    playStartSound();
    updatePhaseDots();

    elapsedInterval = setInterval(updateElapsed, 1000);
    runPhase();
  }

  function pauseSession() {
    isPaused = true;
    clearInterval(countdownInterval);
    clearTimeout(phaseTimeout);
    remainingPhaseTime = PHASES[currentPhase].duration - (Date.now() - phaseStartTime);
    actionBtn.textContent = '继续';
    breathLabel.textContent = '已暂停';
    breathLabel.style.letterSpacing = '4px';
  }

  function resumeSession() {
    isPaused = false;
    actionBtn.textContent = '暂停';
    breathLabel.textContent = PHASES[currentPhase].name;
    breathLabel.style.letterSpacing = '6px';
    phaseStartTime = Date.now() - (PHASES[currentPhase].duration - remainingPhaseTime);

    countdownInterval = setInterval(() => {
      updateCountdown(PHASES[currentPhase].duration, phaseStartTime);
      updateRingProgress(PHASES[currentPhase].duration, phaseStartTime);
    }, 50);

    phaseTimeout = setTimeout(() => {
      clearInterval(countdownInterval);
      currentPhase++;
      runPhase();
    }, remainingPhaseTime);
  }

  function spawnCelebration() {
    if (!celebration) return;
    celebration.innerHTML = '';
    celebration.classList.add('active');

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    for (let i = 0; i < 30; i++) {
      const p = document.createElement('div');
      p.className = 'celebration-particle';
      const angle = (Math.PI * 2 * i) / 30 + (Math.random() - 0.5) * 0.3;
      const dist = 100 + Math.random() * 200;
      p.style.left = centerX + 'px';
      p.style.top = centerY + 'px';
      p.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
      p.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
      p.style.animationDelay = (Math.random() * 0.3) + 's';
      celebration.appendChild(p);
    }

    setTimeout(() => {
      celebration.classList.remove('active');
      celebration.innerHTML = '';
    }, 2000);
  }

  function finishSession() {
    isRunning = false;
    isPaused = false;
    clearInterval(countdownInterval);
    clearTimeout(phaseTimeout);
    clearInterval(elapsedInterval);
    clearAllAnimations();

    if (ringCircle) ringCircle.style.strokeDashoffset = CIRCUMFERENCE;
    phaseDots.forEach(d => d.classList.remove('active', 'completed'));

    breathLabel.textContent = '完成';
    breathLabel.style.letterSpacing = '6px';
    timer.textContent = '--';

    const completed = totalCycles === 999 ? currentCycle : totalCycles;
    cycleInfo.textContent = `已完成 ${completed} 次`;

    actionBtn.textContent = '再来一次';
    actionBtn.classList.remove('btn-pause');
    actionBtn.classList.add('btn-restart');
    cycleSelect.disabled = false;

    playFinishSound();
    spawnCelebration();
  }

  function resetSession() {
    isRunning = false;
    isPaused = false;
    clearInterval(countdownInterval);
    clearTimeout(phaseTimeout);
    clearInterval(elapsedInterval);
    clearAllAnimations();

    if (ringCircle) ringCircle.style.strokeDashoffset = CIRCUMFERENCE;
    phaseDots.forEach(d => d.classList.remove('active', 'completed'));

    breathLabel.textContent = '准备';
    breathLabel.style.letterSpacing = '6px';
    timer.textContent = '--';
    cycleInfo.textContent = '-';
    if (elapsedStat) elapsedStat.textContent = '00:00';

    actionBtn.textContent = '开始';
    actionBtn.classList.remove('btn-pause', 'btn-restart');
    actionBtn.classList.add('btn-start');
    cycleSelect.disabled = false;
  }

  actionBtn.addEventListener('click', () => {
    if (!isRunning) {
      startSession();
    } else if (isPaused) {
      resumeSession();
    } else {
      pauseSession();
    }
  });

  if (soundToggle) {
    soundToggle.addEventListener('change', () => {
      if (soundToggle.checked) ensureAudio();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
      e.preventDefault();
      actionBtn.click();
    }
    if (e.code === 'Escape' && isRunning) {
      if (confirm('确定要结束当前练习吗？')) {
        resetSession();
      }
    }
  });
}
