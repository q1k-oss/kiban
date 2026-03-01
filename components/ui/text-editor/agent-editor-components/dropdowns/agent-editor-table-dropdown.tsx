"use client";
import { Editor } from "@tiptap/core";

import { AppIcon } from "../../../app-icon";
import { Button } from "../../../button";
import {
  activeButtonClass,
  baseButtonClass,
  hoverButtonClass,
} from "../utils";

interface TableDropdownProps {
  editor: Editor;
  isOpen: boolean;
  onToggle: () => void;
}

const ActionRow = ({
  icon,
  label,
  onClick,
}: {
  icon: string;
  label: string;
  onClick: () => void;
}) => (
  <Button
    onClick={onClick}
    className="w-full px-3 py-2 text-left text-xs hover:bg-primary-foreground/10 transition-colors bg-transparent text-primary-text flex items-center gap-2 cursor-pointer"
    aria-label={label}
  >
    <AppIcon iconName={icon} size={14} />
    <span>{label}</span>
  </Button>
);

const PanelDivider = () => (
  <div className="border-t border-border-3 my-1" />
);

export const TableDropdown = ({
  editor,
  isOpen,
  onToggle,
}: TableDropdownProps) => {
  const isInsideTable = editor.isActive("table");

  return (
    <div className="relative">
      <Button
        onClick={onToggle}
        className={`${baseButtonClass} ${isOpen || isInsideTable ? activeButtonClass : hoverButtonClass}`}
        title="Table"
        aria-label="Table"
        aria-expanded={isOpen}
      >
        <AppIcon iconName="table" size={16} />
      </Button>

      {isOpen && (
        <div className="absolute top-full mt-1 bg-agent-card-fill border border-border-3 rounded-md shadow-lg min-w-48 z-20 py-1">
          {!isInsideTable ? (
            <ActionRow
              icon="table"
              label="Insert Table (3×3)"
              onClick={() => {
                editor
                  .chain()
                  .focus()
                  .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                  .run();
                onToggle();
              }}
            />
          ) : (
            <>
              <ActionRow
                icon="columns-2"
                label="Add Column Before"
                onClick={() => {
                  editor.chain().focus().addColumnBefore().run();
                  onToggle();
                }}
              />
              <ActionRow
                icon="columns-2"
                label="Add Column After"
                onClick={() => {
                  editor.chain().focus().addColumnAfter().run();
                  onToggle();
                }}
              />
              <ActionRow
                icon="x"
                label="Delete Column"
                onClick={() => {
                  editor.chain().focus().deleteColumn().run();
                  onToggle();
                }}
              />

              <PanelDivider />

              <ActionRow
                icon="rows-2"
                label="Add Row Before"
                onClick={() => {
                  editor.chain().focus().addRowBefore().run();
                  onToggle();
                }}
              />
              <ActionRow
                icon="rows-2"
                label="Add Row After"
                onClick={() => {
                  editor.chain().focus().addRowAfter().run();
                  onToggle();
                }}
              />
              <ActionRow
                icon="x"
                label="Delete Row"
                onClick={() => {
                  editor.chain().focus().deleteRow().run();
                  onToggle();
                }}
              />

              <PanelDivider />

              <ActionRow
                icon="merge"
                label="Merge / Split Cells"
                onClick={() => {
                  editor.chain().focus().mergeOrSplit().run();
                  onToggle();
                }}
              />
              <ActionRow
                icon="layout-list"
                label="Toggle Header Row"
                onClick={() => {
                  editor.chain().focus().toggleHeaderRow().run();
                  onToggle();
                }}
              />

              <PanelDivider />

              <ActionRow
                icon="trash-2"
                label="Delete Table"
                onClick={() => {
                  editor.chain().focus().deleteTable().run();
                  onToggle();
                }}
              />
            </>
          )}
        </div>
      )}
    </div>
  );
};
