import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { CloseButton } from "../../../../../CloseButton";
import { FeedBackType, feedbackTypes } from "../TypeStep";
import { ScreenshotButton } from "./ScreenshotButton";

interface ContentStepProps {
  feedbackType: FeedBackType;
  onFeedbackResetRequest: () => void;
  onFeedbackSent: () => void;
}

export function ContentStep({ feedbackType, onFeedbackResetRequest, onFeedbackSent }: ContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string | null>(null);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();

    console.log({
      screenshot,
      comment,
    });

    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackResetRequest}
          type="button"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
          {feedbackTypeInfo.label}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="md:min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md resize-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 focus:outline-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Escreva aqui o que você achou desse widget..."
          onChange={(e) => setComment(e.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
            disabled={!comment}
            type="submit"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
};
