"use client";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Background,
  MiniMap,
  useReactFlow,
  Handle,
  Position,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import React, { useState, useCallback } from "react";

import { cn } from "../utils";

import { AppIcon } from "./app-icon";

// TOOL-TIP
const ToolTip = () => {
  const { zoomIn, zoomOut } = useReactFlow();
  const TOOL_TIP_ITEMS = [
    {
      label: "Zoom in",
      icon: "zoom-in",
      action: () => zoomIn({ duration: 200 }),
    },
    {
      label: "Zoom out",
      icon: "zoom-out",
      action: () => zoomOut({ duration: 200 }),
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

interface WorflowCanvasProp {
  workFlowNodes?: any[];
  workFlowEdges?: any[];
  nodeTypes?: {};
}
const WorflowCanvas: React.FC<WorflowCanvasProp> = ({
  workFlowEdges,
  workFlowNodes,
  nodeTypes,
}) => {
  const [nodes, setNodes] = useState(workFlowNodes);
  const [edges, setEdges] = useState(workFlowEdges);

  const onNodesChange = useCallback(
    (changes) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      proOptions={{ hideAttribution: true }}
      fitView
    >
      <MiniMap
        nodeColor="#5C5C5C"
        maskColor="rgba(0, 0, 0, 1)"
        //   className="!bg-minimap !border !border-stroke !rounded-md"
        className="bg-minimap! overflow-hidden! rounded-md!"
      />
      <Background />
      <ToolTip />
    </ReactFlow>
  );
};
export {
  WorflowCanvas,
  Handle as WorflowCanvasNodeHandle,
  Position as WorflowCanvasNodePosition,
};
