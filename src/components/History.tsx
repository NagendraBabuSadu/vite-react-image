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
  console.log("histor", history);
  return (
    <div className="history-container bg-gray-300 rounded-2xl shadow-lg p-6 flex flex-col gap-4 h-full scrollbar-hide">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">🕘 History</h3>
      <ul className="flex flex-col gap-3" role="list">
        {history.map((item) => (
          <li key={item.id} role="listitem">
            <button
              onClick={() => onSelect(item)}
              className="flex items-center gap-3 w-full text-left p-2 rounded-lg hover:bg-indigo-50 transition bg-gray-500"
              aria-label={`Restore history item with prompt ${item.prompt}`}
            >
              <img
                src={item.imageUrl}
                alt={`History: ${item.prompt}`}
                className="w-16 h-16 object-contain rounded-lg shadow-sm  bg-white"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900">
                  {item.style}
                </span>
                <span className="text-xs text-gray-400 truncate">
                  {item.prompt}
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
