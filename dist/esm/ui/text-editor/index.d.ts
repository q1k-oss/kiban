interface TextEditorProps {
    value?: string;
    onChange?: (content: {
        html: string;
        json: unknown;
        text: string;
    }) => void;
    className?: string;
    editorClassName?: string;
}
declare const TextEditor: ({ value, onChange, className, editorClassName, }: TextEditorProps) => import("react/jsx-runtime").JSX.Element;
export { TextEditor };
