export default function Home() {
  return (
    <main class="flex flex-col items-center justify-center gap-10">
      <p class="uppercase text-primary text-lg">Ready</p>
      <h2 class="text-6xl font-medium">What keeps you up at night?</h2>
      <button type="button" class="btn btn-outline">
        Spin
      </button>
      <button type="button" class="btn btn-primary">
        Start
      </button>
    </main>
  );
}
