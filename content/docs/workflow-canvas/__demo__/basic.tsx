"use client";
import React, { useRef } from "react";

import {
  AppIcon,
  WorkflowCanvas,
  WorflowCanvasNodeHandle,
  WorflowCanvasNodePosition,
  cn,
} from "@happect/ethereal-ui";
// ================= TYPES =================
interface CustomCardProps {
  data: {
    label: string;
    body?: string;
    subtitle?: string;
  };
}
interface ToolTipProp {
  onZoomIn: () => void;
  onZoomOut: () => void;
}
// TOOL-TIP
const ToolTip: React.FC<ToolTipProp> = ({ onZoomIn, onZoomOut }) => {
  const TOOL_TIP_ITEMS = [
    {
      label: "Zoom in",
      icon: "zoom-in",
      action: onZoomIn,
    },
    {
      label: "Zoom out",
      icon: "zoom-out",
      action: onZoomOut,
    },
    { label: "Undo", icon: "undo" },
    { label: "Redo", icon: "redo" },
    { label: "Chat mode", icon: "messages-square" },
    { label: "Dev mode", icon: "code-xml" },
  ];

  return (
    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 bg-background-black border border-stroke rounded-md w-fit py-1 px-2">
      {TOOL_TIP_ITEMS.map((item, idx) => {
        const hasSeparator = idx !== TOOL_TIP_ITEMS.length - 1 && idx % 2 !== 0;
        return (
          <React.Fragment key={idx}>
            <div className="relative group">
              <div
                onClick={item.action}
                className={cn(
                  "p-1 text-icon-color-default hover:bg-copilot-background rounded-md cursor-pointer transition-all duration-100"
                )}
              >
                <AppIcon iconName={item.icon} />
              </div>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-agent-card-fill border border-button-border2 text-xs font-light whitespace-nowrap rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
                {item.label}
              </div>
            </div>
            {hasSeparator && <div className="h-6 w-[1px] bg-icon-border"></div>}
          </React.Fragment>
        );
      })}
    </div>
  );
};
const CustomComponent: React.FC<CustomCardProps> = ({ data }) => (
  <div className="bg-agent-card-fill border border-button-border2 rounded-lg p-4 w-[280px] shadow-lg flex flex-col items-center gap-4">
    {/* Input CanvasNodeHandle */}
    <WorflowCanvasNodeHandle
      type="target"
      position={WorflowCanvasNodePosition.Top}
      style={{ background: "#555", width: 10, height: 10 }}
    />

    <div className="text-primary-text text-sm flex items-center justify-between w-full">
      <span>Agent Node</span>
      <div className="flex items-center gap-1">
        <div className="border border-border-3 py-1 px-2 rounded-xs text-xs font-extralight">
          {data.label}
        </div>
        <AppIcon
          iconName="ellipsis-vertical"
          className="text-icon-color-default"
        />
      </div>
    </div>

    <div className="text-tertiary-text text-xs font-light w-full">
      {data.body || "Lorem ipsum dolor, sit amet consectetur adipisicing elit."}
    </div>

    <div className="flex bg-copilot-background w-full p-2 text-xs rounded-sm font-light">
      {data.subtitle || "No Agent Selected"}
    </div>

    {/* Output CanvasNodeHandle */}
    <WorflowCanvasNodeHandle
      type="source"
      position={WorflowCanvasNodePosition.Bottom}
      style={{ background: "#555", width: 10, height: 10 }}
    />
  </div>
);

const nodeTypes = {
  agentNode: CustomComponent,
};
const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {
      label: "agent-1",
      body: "Initial data processing agent",
      subtitle: "Data Processor",
    },
    type: "agentNode",
  },
  {
    id: "2",
    position: { x: 0, y: 250 },
    data: {
      label: "agent-2",
      body: "Validates and transforms incoming data",
      subtitle: "Validator Agent",
    },
    type: "agentNode",
  },
  {
    id: "3",
    position: { x: 350, y: 125 },
    data: {
      label: "agent-3",
      body: "Analyzes patterns and generates insights",
      subtitle: "Analytics Agent",
    },
    type: "agentNode",
  },
  {
    id: "4",
    position: { x: 700, y: 0 },
    data: {
      label: "agent-4",
      body: "Generates reports and summaries",
      subtitle: "Report Generator",
    },
    type: "agentNode",
  },
  {
    id: "5",
    position: { x: 700, y: 250 },
    data: {
      label: "agent-5",
      body: "Sends notifications and alerts",
      subtitle: "Notification Service",
    },
    type: "agentNode",
  },
];
const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
  },
];

export default () => {
  const canvasRef = useRef(null);
  const handleZoomIn = () => {
    canvasRef.current?.zoomIn({ duration: 200 });
  };

  const handleZoomOut = () => {
    canvasRef.current?.zoomOut({ duration: 200 });
  };
  return (
    <div className="relative h-[600px]">
      <WorkflowCanvas
        ref={canvasRef}
        workFlowEdges={initialEdges}
        workFlowNodes={initialNodes}
        nodeTypes={nodeTypes}
      >
        <ToolTip onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} />
      </WorkflowCanvas>
    </div>
  );
};
