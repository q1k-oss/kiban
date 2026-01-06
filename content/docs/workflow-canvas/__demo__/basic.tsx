"use client";
import React from "react";

import {
  AppIcon,
  WorflowCanvas,
  WorflowCanvasNodeHandle,
  WorflowCanvasNodePosition
} from "@happect/ethereal-ui";
// ================= TYPES =================
interface CustomCardProps {
  data: {
    label: string;
    body?: string;
    subtitle?: string;
  };
}

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
  return (
    <div className="relative h-[600px]">
      <WorflowCanvas
        workFlowEdges={initialEdges}
        workFlowNodes={initialNodes}
        nodeTypes={nodeTypes}
      />
    </div>
  );
};
