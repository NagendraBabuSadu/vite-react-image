import "../styles/LiveSummary.css";

interface LiveSummaryProps {
  image: string | null;
  prompt: string;
  style: string;
}

export default function LiveSummary({
  image,
  prompt,
  style,
}: LiveSummaryProps) {
  return (
    <div className="live-summary" aria-live="polite">
      <h2>Live Summary</h2>
      {image && (
        <img src={image} alt="Summary preview" className="summary-img" />
      )}
      <p aria-label={`Prompt: ${prompt}`}>
        <strong>Prompt:</strong> {prompt}
      </p>
      <p aria-label={`Style: ${style}`}>
        <strong>Style:</strong> {style}
      </p>
    </div>
  );
}
