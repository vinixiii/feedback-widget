import { useState } from "react";
import { TypeStep, FeedBackType } from "./components/TypeStep";
import { ContentStep } from "./components/ContentStep";
import { SuccessStep } from "./components/SuccessStep";

export function FeedbackForm() {
  const [feedbackType, setFeedbackType] = useState<FeedBackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState<boolean>(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      
      {feedbackSent ? (
        <SuccessStep onFeedbackResetRequest={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <TypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <ContentStep
              feedbackType={feedbackType}
              onFeedbackResetRequest={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ por <a className="underline underline-offset-2" href="https://github.com/vinixiii">Vinícius Figueiroa</a>
      </footer>
    </div>
  )
}
