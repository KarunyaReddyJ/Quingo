import JoditEditor from "jodit-react";

// eslint-disable-next-line react/prop-types
const TextEditor = ({ content, setContent }) => {
  const config = {
    readonly: false,
    placeholder: "Start Typing.....",
    height: 400,
    theme: "default",
    toolbarAdaptive: false,
    uploader: {
      insertImageAsBase64URI: true, // Enable base64 image embedding
    },
    toolbarSticky: false,
    style: {
      backgroundColor: "#f9fafb", // Tailwind's gray-50
      borderRadius: "12px",
      padding: "8px",
    },
    buttons: [
      "bold", "italic", "underline",
      "ul", "ol",
      "image", "link", "table",
      "hr", "eraser", "copyformat",
      "undo", "redo", "source",
    ]
  };

  return (
    <div className="rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <JoditEditor
        value={content}
        config={config}
        tabIndex={1}
        onBlur={(newContent) => setContent(newContent)}
      />
    </div>
  );
};

export default TextEditor;
