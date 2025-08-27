import React, { useEffect, useState } from "react";
import UploadPreview from "./components/UploadPreview";
import PromptStyleForm from "./components/PromptStyleForm";
import GenerateButton from "./components/GenerateButton";
import History from "./components/History";

export default function App() {
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Editorial");
  const [summary, setSummary] = useState<{
    image: string | null;
    prompt: string;
    style: string;
  }>({
    image: null,
    prompt: "",
    style: "Editorial",
  });
  const [history, setHistory] = useState<any[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("history");
    if (saved) setHistory(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));
  }, [history]);

  return (
    <>
      <div className="bg-white text-4xl mt-3">
        <h1 className="md:text-5xl font-extrabold text-gray-900 text-center justify-self-center md:text-left mb-4">
          🎨 Mini AI Studio
        </h1>
      </div>

      <div className="min-h-screen flex items-start justify-center bg-gray-100 p-6 text-black border-8 border-cyan-800 rounded-xl  shadow-2xl">
        <div className="w-full max-w-5xl bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8  shadow-2xl">
          <div className="flex-1 flex flex-col gap-6">
            <UploadPreview
              image={imageDataUrl}
              setImageDataUrl={setImageDataUrl}
            />

            <PromptStyleForm
              prompt={prompt}
              style={style}
              onPromptChange={setPrompt}
              onStyleChange={setStyle}
            />
            <GenerateButton
              imageDataUrl={imageDataUrl}
              prompt={prompt}
              style={style}
              setHistory={setHistory}
              onSuccess={() => setImageDataUrl(null)} // reset UploadPreview after adding to history
            />
          </div>

          <div className="flex-1 h-[600px]">
            <History history={history} onSelect={setSummary} />
          </div>
        </div>
      </div>
    </>
  );
}
