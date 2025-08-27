import { useRef, useState } from "react";

interface UploadPreviewProps {
  image: string | null;
  setImageDataUrl: (url: string | null) => void;
}

export default function UploadPreview({
  image,
  setImageDataUrl,
}: UploadPreviewProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") setImageDataUrl(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") setImageDataUrl(reader.result);
      };
      reader.readAsDataURL(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="w-full">
      <div
        tabIndex={0}
        role="button"
        aria-label="Click or drag image to upload"
        onClick={() => fileInputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            fileInputRef.current?.click();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        className={`flex flex-col items-center justify-center w-full h-60 border-2 border-dashed rounded-xl cursor-pointer transition-all shadow-2xl
          ${
            dragOver
              ? "border-indigo-500 bg-indigo-50"
              : "border-gray-300 bg-gray-50 hover:border-indigo-400 hover:bg-gray-100"
          }`}
      >
        {image ? (
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={image}
              alt="Uploaded preview"
              className="max-h-56 rounded-lg shadow-md object-contain"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setImageDataUrl(null);
              }}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full hover:bg-red-600 transition"
              aria-label="Remove uploaded image"
            >
              ✕
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mb-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 16v-8m0 0L8 12m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
              />
            </svg>
            <p className="text-sm font-medium">Click or drag image to upload</p>
            <p className="text-xs text-gray-400 mt-1">PNG or JPG up to 5MB</p>
          </div>
        )}
      </div>

      <input
        id="file-upload"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="hidden"
        aria-hidden="true"
      />
    </div>
  );
}
