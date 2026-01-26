import { Handle, Position, BackgroundVariant, type Edge, type Node, type NodeTypes } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { ISetCenterOptionsProp, IWorkflowCanvasProp, IWorkflowCanvasRefProp, IZoomOptionsProp, IMiniMapConfigProp, IBackgroundConfigProp } from "./types";
declare const WorkflowCanvas: import("react").ForwardRefExoticComponent<IWorkflowCanvasProp & import("react").RefAttributes<IWorkflowCanvasRefProp>>;
export { WorkflowCanvas, Handle as WorkflowCanvasNodeHandle, Position as WorkflowCanvasNodePosition, BackgroundVariant as WorkflowCanvasBackgroundVariant, };
export type { IWorkflowCanvasProp, Node as WorkflowNode, Edge as WorkflowEdge, NodeTypes as WorkflowNodeTypes, ISetCenterOptionsProp, IWorkflowCanvasRefProp, IZoomOptionsProp, IMiniMapConfigProp, IBackgroundConfigProp, };
