# 🎨 Mini AI Studio

Mini AI Studio is a React-based web application that allows users to upload images, apply AI-generated style prompts, and maintain a live history of transformations. The app features a responsive UI, drag-and-drop image uploads, keyboard accessibility, and a fully interactive history panel.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [Testing](#testing)
- [Design Notes](#design-notes)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Demo

_(Add screenshots or link to a live demo if available)_

---

## Features

- Upload images via file input or drag-and-drop.
- Reset or remove uploaded images.
- Enter a text prompt describing the desired AI style.
- Choose a style from predefined options: Editorial, Streetwear, Vintage, Cyberpunk, Fantasy.
- Generate AI-enhanced images with mock API integration.
- Maintain a history of uploaded/generated images (local storage persistent).
- Keyboard navigable with visible focus states.
- Fully responsive design for mobile and desktop.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/mini-ai-studio.git
cd mini-ai-studio
```

## Design Notes

### Component Design

- **UploadPreview:** Drag-and-drop or click to upload images, with reset/remove functionality.
- **PromptStyleForm:** Input for prompt and dropdown for style selection.
- **GenerateButton:** Mock API calls to generate styled images with retry and abort functionality.
- **History:** Maintains and displays previously generated images, with keyboard accessibility and ARIA labels.
- **LiveSummary:** Displays live summary of the prompt, style, and uploaded image.

### Accessibility

- All interactive elements are focusable via keyboard.
- Focus outlines and `focus:ring` styles are added for visible navigation.
- ARIA attributes added where necessary (`aria-label`, `aria-live`).

### Styling

- TailwindCSS used for layout, spacing, and responsive design.
- Shadows, hover effects, and rounded corners enhance the UI.
- Scrollbars are hidden with `overflow-y-auto` while keeping scroll functionality.

### State Management

- React `useState` for local component state.
- `useEffect` for persisting history to `localStorage`.

### Performance

- Optimized for small image previews.
- Mock API simulates asynchronous image generation with retries.

## Folder Structure

mini-ai-studio/
├── public/
├── src/
│ ├── components/
│ │ ├── UploadPreview.tsx
│ │ ├── PromptStyleForm.tsx
│ │ ├── GenerateButton.tsx
│ │ ├── History.tsx
│ │ └── LiveSummary.tsx
│ ├── styles/
│ │ ├── LiveSummary.css
│ │ ├── UploadPreview.css
│ │ └── History.css
│ ├── App.tsx
│ └── index.tsx
├── package.json
└── README.md

## Contributing

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Commit your changes with clear messages.
- Push to your fork and create a Pull Request with a meaningful description.

## License
MIT License © [Nagendra Babu]
