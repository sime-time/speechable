import {
  createMemo,
  createSignal,
  onCleanup,
  onSettled,
  Show,
  Switch,
  Match,
} from "solid-js";
import { FaSolidArrowRotateBack, FaSolidArrowLeft } from "solid-icons/fa";
import { playTimesUp } from "../lib/sounds";

const COUNTDOWN_SECONDS = 5;
const SPEAK_SECONDS = 3;
const COUNTDOWN_MS = COUNTDOWN_SECONDS * 1000;
const SPEAK_MS = SPEAK_SECONDS * 1000;

enum Phase {
  Idle = "idle",
  Countdown = "countdown",
  Speaking = "speaking",
  Stopped = "stopped",
  Done = "done",
}

export default function Speak() {
  const [phase, setPhase] = createSignal<Phase>(Phase.Idle);
  const [countdownMs, setCountdownMs] = createSignal(COUNTDOWN_MS);
  const [speakMs, setSpeakMs] = createSignal(SPEAK_MS);
  const [micError, setMicError] = createSignal("");
  const [isRequestingMic, setIsRequestingMic] = createSignal(false);

  let micDialog: HTMLDialogElement | undefined;
  let micStream: MediaStream | undefined;

  const radius = 132;
  const strokeWidth = 14;
  const circumference = 2 * Math.PI * radius;

  const remainingPercent = createMemo(() => speakMs() / SPEAK_MS);

  const progressOffset = createMemo(
    () => -circumference * (1 - remainingPercent()),
  );

  const displayTime = createMemo(() => {
    const secondsLeft = Math.ceil(speakMs() / 1000);
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  });

  const countdown = createMemo(() =>
    Math.min(COUNTDOWN_SECONDS, Math.ceil(countdownMs() / 1000)),
  );

  let animationFrame = 0;

  const resetTimer = () => {
    window.cancelAnimationFrame(animationFrame);
    setCountdownMs(COUNTDOWN_MS);
    setSpeakMs(SPEAK_MS);
    setPhase(Phase.Idle);
  };

  const stopSpeaking = () => {
    setPhase(Phase.Stopped);
    window.cancelAnimationFrame(animationFrame);
  };

  const startSpeaking = () => {
    resetTimer();
    setPhase(Phase.Countdown);
    const countdownEndsAt = window.performance.now() + COUNTDOWN_MS;
    let speakEndsAt = 0;

    const tick = (time: number) => {
      if (phase() === Phase.Countdown) {
        const remaining = Math.max(0, countdownEndsAt - time);
        setCountdownMs(remaining);

        if (remaining === 0) {
          speakEndsAt = time + SPEAK_MS;
          setSpeakMs(SPEAK_MS);
          setPhase(Phase.Speaking);
        }
      } else if (phase() === Phase.Speaking) {
        const remaining = Math.max(0, speakEndsAt - time);
        setSpeakMs(remaining);

        if (remaining === 0) {
          playTimesUp();
          setPhase(Phase.Done);
          return;
        }
      } else {
        return;
      }

      animationFrame = window.requestAnimationFrame(tick);
    };

    animationFrame = window.requestAnimationFrame(tick);
  };

  onCleanup(() => {
    window.cancelAnimationFrame(animationFrame);
  });

  return (
    <main class="relative isolate flex min-h-screen overflow-hidden bg-base-100 px-5 py-24 text-base-content sm:px-8">
      <div class="absolute inset-x-0 top-0 -z-10 h-44 bg-linear-to-b from-secondary/15 to-transparent" />

      <section class="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-8 text-center">
        <div class="relative grid size-80 place-items-center rounded-full sm:size-96">
          <svg
            class="absolute inset-0 size-full"
            viewBox="0 0 300 300"
            aria-hidden="true"
          >
            <circle
              cx="150"
              cy="150"
              r={radius}
              fill="none"
              stroke="var(--color-secondary)"
              stroke-width={strokeWidth}
              opacity={phase() === Phase.Countdown ? 1 : 0.18}
            />

            {phase() !== Phase.Countdown && (
              <circle
                cx="150"
                cy="150"
                r={radius}
                fill="none"
                stroke="var(--color-secondary)"
                stroke-width={strokeWidth}
                stroke-linecap="round"
                stroke-dasharray={String(circumference)}
                stroke-dashoffset={progressOffset()}
                class="origin-center -rotate-90"
              />
            )}
          </svg>

          <div class="relative z-10 flex flex-col items-center gap-2">
            <span class="text-7xl font-semibold tabular-nums tracking-tight text-neutral sm:text-8xl">
              {phase() === Phase.Speaking || phase() === Phase.Done
                ? displayTime()
                : countdown()}
            </span>

            <span class="text-sm font-bold uppercase tracking-[0.24em] text-neutral/60">
              {phase() === Phase.Done
                ? "time's up!"
                : phase() === Phase.Speaking
                  ? "remaining"
                  : "countdown"}
            </span>
          </div>
        </div>

        <div class="flex w-full max-w-sm flex-col gap-3 sm:flex-row sm:justify-center">
          <Switch>
            <Match when={phase() === Phase.Idle}>
              <button
                type="button"
                onClick={startSpeaking}
                class="btn btn-success min-h-14 rounded-full px-10 text-lg font-extrabold uppercase tracking-wide shadow-md transition-transform hover:scale-105 active:scale-95"
              >
                Start
              </button>
            </Match>

            <Match
              when={phase() === Phase.Speaking || phase() === Phase.Countdown}
            >
              <button
                type="button"
                onClick={stopSpeaking}
                class="btn btn-error min-h-14 rounded-full px-10 text-lg font-extrabold uppercase tracking-wide shadow-md transition-transform hover:scale-105 active:scale-95"
              >
                Stop
              </button>
            </Match>

            <Match when={phase() === Phase.Stopped || phase() === Phase.Done}>
              <a
                href="/"
                class="btn btn-outline btn-neutral min-h-14 rounded-full px-10 text-lg font-extrabold uppercase tracking-wide flex items-center justify-center gap-2"
              >
                <FaSolidArrowLeft />
                Back
              </a>
              <button
                type="button"
                onClick={resetTimer}
                class="btn btn-outline btn-neutral min-h-14 rounded-full px-10 text-lg font-extrabold uppercase tracking-wide  flex items-center justify-center gap-2"
              >
                <FaSolidArrowRotateBack />
                Reset
              </button>
              <a
                href="/evaluate"
                class="btn btn-secondary min-h-14 rounded-full px-10 text-lg font-extrabold uppercase tracking-wide"
              >
                Evaluate
              </a>
            </Match>
          </Switch>
        </div>
      </section>
    </main>
  );
}
