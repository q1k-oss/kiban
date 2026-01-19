import { Editor } from "@tiptap/react";

interface FontSizePickerProps {
  editor: Editor;
  onClose: () => void;
}

const FONT_SIZES = [
  { label: "Small", value: "12px" },
  { label: "Normal", value: "16px" },
  { label: "Medium", value: "18px" },
  { label: "Large", value: "24px" },
  { label: "Extra Large", value: "32px" },
  { label: "Huge", value: "48px" },
];

export const FontSizePicker = ({ editor, onClose }: FontSizePickerProps) => {
  return (
    <div className="absolute top-full w-full mt-2 bg-agent-card-fill border border-border-3 rounded-lg shadow-xl p-2 z-50 min-w-[160px]">
      <div className="text-sm font-medium text-primary-text mb-2 px-2">
        Font Size
      </div>
      <div className="space-y-1">
        {FONT_SIZES.map((size) => (
          <button
            key={size.value}
            onClick={() => {
             editor.chain().focus().setMark("textStyle", { fontSize: size.value }).run();
             onClose();
            }}
            className="w-full px-3 py-2 text-left rounded transition-colors text-xs text-tertiary-text hover:text-primary-text hover:bg-primary-foreground/10 font-light flex items-center justify-between cursor-pointer duration-100"
          >
            <span className="font-medium">{size.label}</span>
            <span>({size.value})</span>
          </button>
        ))}
        <div className="border-t border-button-border2 my-1" />
        <button
          onClick={() => {
            editor.chain().focus().setMark("textStyle", { fontSize: null }).run();
            onClose();
          }}
          className="w-full px-3 py-2 text-left rounded transition-colors text-sm text-secondary-text hover:text-primary-text hover:bg-primary-foreground/10 cursor-pointer duration-100"
        >
          Reset to default
        </button>
      </div>
    </div>
  );
};