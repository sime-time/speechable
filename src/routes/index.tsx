import { createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import { randomPrompt } from "../lib/prompts";
import { playTick, playSuccess } from "../lib/sounds";
import { paths } from "../router";

export default function Home() {
  const [hasSpun, setHasSpun] = createSignal(false);
  const [isSpinning, setIsSpinning] = createSignal(false);
  const [prompt, setPrompt] = createSignal(randomPrompt());

  const navigate = useNavigate();

  // Spin animation
  const spinPrompt = () => {
    if (isSpinning()) return;

    setIsSpinning(true);

    let step = 0;
    const totalSteps = 38;

    const tick = () => {
      step += 1;
      setPrompt(randomPrompt());
      playTick();

      if (step >= totalSteps) {
        playSuccess();
        setIsSpinning(false);
        setHasSpun(true);
        return;
      }

      const delay = 35 + step * 4;
      window.setTimeout(tick, delay);
    };

    tick();
  };

  return (
    <main class="relative isolate flex min-h-screen overflow-hidden bg-base-100 px-5 py-6 text-base-content sm:px-8 sm:py-8">
      <div class="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-accent/25 to-transparent" />
      <div class="absolute left-1/2 top-1/2 -z-10 h-136 w-136 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

      <section class="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-7 text-center sm:gap-8">
        <div class="space-y-5">
          <p class="text-base font-extrabold uppercase tracking-[0.2em] text-primary sm:text-xl">
            Your prompt
          </p>

          <div class="flex min-h-56 items-center justify-center sm:min-h-72 lg:min-h-80">
            <h2 class="mx-auto max-w-5xl text-4xl font-bold leading-tight tracking-tight text-neutral sm:text-7xl lg:text-7xl">
              {prompt()}
            </h2>
          </div>
        </div>

        <div class="flex w-full max-w-3xl flex-col items-center gap-6 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={spinPrompt}
            disabled={isSpinning()}
            class={[
              "btn w-full rounded-full font-extrabold uppercase tracking-wide transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 sm:w-auto",
              hasSpun()
                ? "btn-outline btn-neutral min-h-18 px-10 text-3xl sm:min-w-52"
                : "btn-primary min-h-24 px-14 text-5xl shadow-2xl sm:min-w-80 sm:text-6xl",
            ]}
          >
            Spin
          </button>

          <button
            type="button"
            onClick={() => navigate(paths.speak)}
            disabled={isSpinning()}
            class={[
              "btn w-full rounded-full font-extrabold uppercase tracking-wide transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 sm:w-auto",
              hasSpun()
                ? "btn-primary min-h-24 px-14 text-5xl shadow-2xl sm:min-w-80 sm:text-6xl"
                : "btn-outline btn-neutral min-h-18 px-10 text-3xl sm:min-w-52",
            ]}
          >
            Speak
          </button>
        </div>
      </section>
    </main>
  );
}
