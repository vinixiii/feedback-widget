import { CloseButton } from "../../../../../CloseButton";

import doneImageUrl from '../../../../../../assets/done.svg';

interface FeedbackContentStepProps {
  onFeedbackResetRequest: () => void;
}

export function SuccessStep({ onFeedbackResetRequest }: FeedbackContentStepProps) {
  return (
    <>
      <header>
       <CloseButton />
      </header>

      <div className="flex flex-col items-center py-10 md:w-[304px]">
        <img src={doneImageUrl} alt="Ícone de concluído" />
        <span className="text-xl mt-2">Agradecemos o feedback!</span>
        
        <button
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
          onClick={onFeedbackResetRequest}
          type="button"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
};
