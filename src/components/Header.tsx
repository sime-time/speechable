import { BiRegularCog } from "solid-icons/bi";

export default function Header() {
  return (
    <header class="absolute inset-x-0 top-0 z-10 flex min-h-20 items-center justify-center  px-4 py-4 sm:min-h-24 sm:px-8">
      <h1 class="text-4xl font-extrabold tracking-tight text-neutral sm:text-5xl">
        Speechable
      </h1>
      <button
        type="button"
        class="btn btn-circle btn-neutral absolute right-4 shadow-md transition-transform hover:scale-105 active:scale-95 sm:right-8"
        aria-label="Open settings"
      >
        <BiRegularCog size={26} aria-hidden="true" />
      </button>
    </header>
  );
}
