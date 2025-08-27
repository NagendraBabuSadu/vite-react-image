interface PromptStyleProps {
  prompt: string;
  style: string;
  onPromptChange: (value: string) => void;
  onStyleChange: (value: string) => void;
}

export default function PromptStyleForm({
  prompt,
  style,
  onPromptChange,
  onStyleChange,
}: PromptStyleProps) {
  return (
    <div className="flex flex-col gap-6 w-full">
    
      <div className="flex flex-col gap-2">
        <label
          htmlFor="prompt-input"
          className="text-sm font-medium text-gray-700"
        >
          ✍️ Prompt
        </label>
        <input
          id="prompt-input"
          type="text"
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
          placeholder="Enter prompt..."
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        />
      </div>

   
      <div className="flex flex-col gap-2">
        <label
          htmlFor="style-select"
          className="text-sm font-medium text-gray-700"
        >
          🎨 Style
        </label>
        <select
          id="style-select"
          value={style}
          onChange={(e) => onStyleChange(e.target.value)}
          className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        >
          <option value="Editorial">Editorial</option>
          <option value="Streetwear">Streetwear</option>
          <option value="Vintage">Vintage</option>
        </select>
      </div>
    </div>
  );
}
