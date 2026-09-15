import { FaSolidMicrophoneAlt } from "solid-icons/fa";

export default function MicPermission(props: {
  setDialog: (dialog: HTMLDialogElement) => void;
  isRequesting: boolean;
  onEnableMic: () => void;
  onContinueWithoutMic: () => void;
}) {
  return (
    <dialog
      ref={props.setDialog}
      class="modal"
      onCancel={(event) => {
        event.preventDefault();
      }}
    >
      <div class="modal-box text-center">
        <div class="text-4xl mx-auto grid size-20 place-items-center rounded-full bg-primary/10 text-primary">
          <FaSolidMicrophoneAlt />
        </div>
        <h3 class="mt-6 text-2xl font-extrabold text-neutral">
          Enable microphone
        </h3>

        <p class="py-4 text-sm leading-6 text-neutral/70">
          Speechable can use your microphone to evaluate your speech. You can
          continue without it, but you will not receive feedback.
        </p>

        <div class="modal-action flex-col-reverse justify-center gap-3 sm:flex-row">
          <button
            type="button"
            class="btn btn-ghost min-h-12 rounded-full px-7 font-extrabold uppercase tracking-wide"
            disabled={props.isRequesting}
            onClick={props.onContinueWithoutMic}
          >
            Continue without mic
          </button>

          <button
            type="button"
            class="btn btn-primary min-h-12 rounded-full px-7 font-extrabold uppercase tracking-wide"
            disabled={props.isRequesting}
            onClick={props.onEnableMic}
          >
            {props.isRequesting ? "Requesting..." : "Enable microphone"}
          </button>
        </div>
      </div>
    </dialog>
  );
}
