import "../styles/History.css";

interface HistoryItem {
  id: string;
  imageUrl: string;
  prompt: string;
  style: string;
  createdAt: string;
}

interface HistoryProps {
  history: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
}

export default function History({ history, onSelect }: HistoryProps) {
  return (
    <div className="history">
      <h3>History</h3>
      <ul>
        {history.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => onSelect(item)}
              aria-label={`Restore history item with prompt ${item.prompt}`}
            >
              <img src={item.imageUrl} alt={`History: ${item.prompt}`} />
              <span>{item.style}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
