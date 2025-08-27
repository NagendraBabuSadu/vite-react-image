import { useState, useRef } from "react";
interface Props {
  imageDataUrl: string | null;
  prompt: string;
  style: string;
  setHistory: (cb: any) => void;
}

export default function GenerateButton({
  imageDataUrl,
  prompt,
  style,
  setHistory,
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
        setHistory((prev: any) => [res, ...prev.slice(0, 4)]);
        setLoading(false);
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
    <div>
      <button onClick={handleGenerate} disabled={loading}>
        Generate
      </button>
      {loading && (
        <>
          <span className=""></span>
          <button onClick={handleAbort}>Abort</button>
        </>
      )}
    </div>
  );
}
