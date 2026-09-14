let audioContext: AudioContext | undefined;

const getAudioContext = () => {
  audioContext ??= new window.AudioContext();
  return audioContext;
};

export const playTick = () => {
  audioContext ??= new AudioContext();

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();

  oscillator.type = "square";
  oscillator.frequency.value = 900;

  gain.gain.setValueAtTime(0.035, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    audioContext.currentTime + 0.035,
  );

  oscillator.connect(gain);
  gain.connect(audioContext.destination);

  oscillator.start();
  oscillator.stop(audioContext.currentTime + 0.035);
};

export const playSuccess = () => {
  const context = getAudioContext();
  const now = context.currentTime;

  const playNote = (frequency: number, start: number, duration: number) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.value = frequency;

    gain.gain.setValueAtTime(0.001, start);
    gain.gain.exponentialRampToValueAtTime(0.08, start + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start(start);
    oscillator.stop(start + duration);
  };

  playNote(523.25, now, 0.12);
  playNote(783.99, now + 0.09, 0.18);
};

export const playTimesUp = () => {
  const context = getAudioContext();
  const now = context.currentTime;

  const playNote = (
    frequency: number,
    start: number,
    duration: number,
    peak = 0.045,
  ) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = frequency;

    gain.gain.setValueAtTime(0.001, start);
    gain.gain.exponentialRampToValueAtTime(peak, start + 0.025);
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start(start);
    oscillator.stop(start + duration);
  };

  playNote(523.25, now, 0.18);
  playNote(659.25, now + 0.11, 0.2);
  playNote(783.99, now + 0.22, 0.28);
  playNote(1046.5, now + 0.38, 0.34, 0.03);
};
