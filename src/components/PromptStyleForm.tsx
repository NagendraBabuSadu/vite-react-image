import "../styles/PromptStyle.css";

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
    <div className="prompt-style">
      <label htmlFor="prompt-input">Prompt</label>
      <input
        id="prompt-input"
        type="text"
        value={prompt}
        onChange={(e) => onPromptChange(e.target.value)}
        placeholder="Enter prompt"
      />

      <label htmlFor="style-select">Style</label>
      <select
        id="style-select"
        value={style}
        onChange={(e) => onStyleChange(e.target.value)}
      >
        <option value="Editorial">Editorial</option>
        <option value="Streetwear">Streetwear</option>
        <option value="Vintage">Vintage</option>
      </select>
    </div>
  );
}
