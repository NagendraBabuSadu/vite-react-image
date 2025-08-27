import "../styles/LoadingSpinner.css";

export default function LoadingSpinner() {
  return (
    <div 
      className="spinner" 
      role="status" 
      aria-label="Loading, please wait"
    ></div>
  );
}
