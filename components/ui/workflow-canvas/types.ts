import {
  BackgroundVariant,
 type Edge,
  type Node,
  type FitViewOptions,
  type ReactFlowProps,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  type NodeTypes,
  type ProOptions,
  type NodeMouseHandler,
  type EdgeMouseHandler,
} from "@xyflow/react";
import React from "react";

interface IMiniMapConfigProp {
  show?: boolean;
  nodeColor?: string;
  maskColor?: string;
  width?: number;
  height?: number;
  className?: string;
  zoomStep?: number;
}

export interface IBackgroundConfigProp {
  show?: boolean;
  variant?: BackgroundVariant;
  gap?: number;
  size?: number;
  color?: string;
  className?: string;
}
export interface IZoomOptionsProp {
  duration?: number;
}

export interface ISetCenterOptionsProp {
  zoom?: number;
  duration?: number;
}
export interface IWorkflowCanvasRefProp {
  zoomIn: (options?: IZoomOptionsProp) => void;
  zoomOut: (options?: IZoomOptionsProp) => void;
  fitView: (options?: FitViewOptions) => void;
  setCenter: (x: number, y: number, options?: ISetCenterOptionsProp) => void;
  getZoom: () => number;
  getNodes: () => Node[];
  getEdges: () => Edge[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
}

export interface IWorkflowCanvasProp {
  workFlowNodes?: Node[];
  workFlowEdges?: Edge[];
  nodeTypes?: NodeTypes;
  children?: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  miniMapConfig?: IMiniMapConfigProp;
  backgroundConfig?: IBackgroundConfigProp;
  fitView?: boolean;
  fitViewOptions?: FitViewOptions;
  nodesDraggable?: boolean;
  nodesConnectable?: boolean;
  elementsSelectable?: boolean;
  panOnDrag?: boolean | number[];
  zoomOnScroll?: boolean;
  zoomOnPinch?: boolean;
  zoomOnDoubleClick?: boolean;
  panOnScroll?: boolean;
  selectNodesOnDrag?: boolean;
  snapToGrid?: boolean;
  snapGrid?: [number, number];
  onlyRenderVisibleElements?: boolean;
  minZoom?: number;
  maxZoom?: number;
  defaultViewport?: { x: number; y: number; zoom: number };

  // Callbacks
  onNodesChange?: OnNodesChange;
  onEdgesChange?: OnEdgesChange;
  onConnect?: OnConnect;
  onNodeClick?: NodeMouseHandler;

  onEdgeClick?: EdgeMouseHandler;
  onInit?: ReactFlowProps["onInit"];
  onNodeDragStart?: NodeMouseHandler;
  onNodeDrag?: NodeMouseHandler;
  onNodeDragStop?: NodeMouseHandler;

  // Pro options
  ProOptions?: ProOptions;
}
