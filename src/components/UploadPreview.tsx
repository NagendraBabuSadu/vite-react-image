import { useRef } from "react";
import "../styles/UploadPreview.css";

interface UploadPreviewProps {
  image: string | null;
  setImageDataUrl: (url: string) => void;
}

export default function UploadPreview({
  image,
  setImageDataUrl,
}: UploadPreviewProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setImageDataUrl(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="upload-preview">
      <label
        htmlFor="file-upload"
        className="upload-label"
        aria-label="Upload an image"
      >
        Choose Image
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="sr-only"
      />
      {image && (
        <img src={image} alt="Uploaded preview" className="preview-img" />
      )}
    </div>
  );
}
