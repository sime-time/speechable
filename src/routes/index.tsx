import { Title } from "@solidjs/meta";

export default function Home() {
  return (
    <main>
      <Title>Speechr</Title>
      <h1 class="text-emerald-400">Speechr</h1>
      <p>Spin for speech prompt</p>
      <button type="button" class="btn btn-primary">
        Spin
      </button>
    </main>
  );
}
