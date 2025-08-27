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
    <div>
      <h1>🎨 Mini AI Studio</h1>
      <UploadPreview image={imageDataUrl} setImageDataUrl={setImageDataUrl} />
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
      />
      <History history={history} onSelect={setSummary} />
    </div>
  );
}
