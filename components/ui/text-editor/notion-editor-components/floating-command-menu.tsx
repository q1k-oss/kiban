import { Editor } from "@tiptap/core";

import { AppIcon } from "../../app-icon";
import { Button } from "../../button";
import { NOTION_FLOAT_MENU_TOOLBAR_CONFIG } from "../constants";

interface FloatingMenuProps {
  editor: Editor;
}

export const FloatingCommandMenu = ({ editor }: FloatingMenuProps) => {
  return (
    <div className="bg-agent-card-fill border border-border-3 rounded-lg shadow-2xl w-80 max-h-96 overflow-y-auto">
      <div className="p-1 flex flex-col items-center w-full gap-1">
        {NOTION_FLOAT_MENU_TOOLBAR_CONFIG.map((cmd, idx) => (
          <Button
            key={idx}
            onClick={() => cmd.action(editor)}
            className="w-full flex items-start gap-3 px-3 h-fit  text-sm text-left rounded transition-colors group cursor-pointer duration-100 hover:bg-primary-foreground/10 bg-transparent"
          >
            <span className="mt-0.5 text-icon-disabled-fill group-hover:text-primary-text group duration-100">
              <AppIcon iconName={cmd.icon} size={18} />
            </span>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-secondary-text group-hover:text-primary-text duration-100">
                {cmd.label}
              </div>
              <div className="text-xs text-disabled-text group-hover:text-secondary-text truncate duration-100">
                {cmd.description}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
