import { useState } from "react";
import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas';
import { Loading } from "../../../../../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton({ screenshot, onScreenshotTook }: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true);

    const canvas = await html2canvas(document.querySelector('html')!);
    const base64image = canvas.toDataURL('image/png');
    
    onScreenshotTook(base64image);

    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundSize: 'contain',
        }}
        onClick={() => onScreenshotTook(null)}
        type="button"
      >
        <Trash weight="fill" className="w-4 h-4" />
      </button>
    );
  }

  return(
    <button
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
      onClick={handleTakeScreenshot}
      type="button"
    >
      {!isTakingScreenshot ? (
        <Camera className="w-6 h-6 text-zinc-100" />
      ) : (
        <Loading />
      )}
    </button>
  );
};
