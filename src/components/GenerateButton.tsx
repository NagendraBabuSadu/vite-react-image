import { useState, useRef } from "react";

interface Props {
  imageDataUrl: string | null;
  prompt: string;
  style: string;
  setHistory: (cb: any) => void;
  onSuccess?: () => void; // callback after adding to history
}

export default function GenerateButton({
  imageDataUrl,
  prompt,
  style,
  setHistory,
  onSuccess,
}: Props) {
  const [loading, setLoading] = useState(false);
  const controllerRef = useRef<AbortController | null>(null);

  const mockApi = async (): Promise<any> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.2) reject({ message: "Model overloaded" });
        else
          resolve({
            id: Date.now(),
            imageUrl: imageDataUrl,
            prompt,
            style,
            createdAt: new Date().toISOString(),
          });
      }, 1500);
    });
  };

  const handleGenerate = async () => {
    if (!imageDataUrl) return alert("Upload an image first");
    setLoading(true);
    let attempts = 0;

    while (attempts < 3) {
      try {
        const res = await mockApi();
        setHistory((prev: any) => [res, ...prev].slice(0, 50));
        setLoading(false);
        if (onSuccess) onSuccess();
        return;
      } catch (err: any) {
        attempts++;
        if (attempts >= 3) {
          alert(err.message || "Failed after retries");
          setLoading(false);
          return;
        }
        await new Promise((r) => setTimeout(r, 1000 * 2 ** attempts));
      }
    }
  };

  const handleAbort = () => {
    controllerRef.current?.abort();
    setLoading(false);
  };

  return (
    <div className="flex items-center gap-4 mt-4">
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="bg-indigo-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition w-full"
      >
        {loading ? "Generating..." : "Generate"}
      </button>

      {loading && (
        <button
          onClick={handleAbort}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-xl shadow hover:bg-gray-300 transition"
        >
          Abort
        </button>
      )}
    </div>
  );
}
