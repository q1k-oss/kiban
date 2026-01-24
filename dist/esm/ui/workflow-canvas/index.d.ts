import { Handle, Position, BackgroundVariant, type Edge, type Node, type NodeTypes } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import React from "react";
import { ISetCenterOptionsProp, IWorkflowCanvasProp, IWorkflowCanvasRefProp, IZoomOptionsProp } from "./types";
declare const WorkflowCanvas: React.ForwardRefExoticComponent<IWorkflowCanvasProp & React.RefAttributes<IWorkflowCanvasRefProp>>;
export { WorkflowCanvas, Handle as WorkflowCanvasNodeHandle, Position as WorkflowCanvasNodePosition, BackgroundVariant as WorkflowCanvasBackgroundVariant, };
export type { IWorkflowCanvasProp, Node as WorkflowNode, Edge as WorkflowEdge, NodeTypes as WorkflowNodeTypes, ISetCenterOptionsProp, IWorkflowCanvasRefProp, IZoomOptionsProp, };
