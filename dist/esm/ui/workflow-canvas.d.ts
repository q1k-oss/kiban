import { Handle, Position } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import React from "react";
interface WorkflowCanvasProp {
    workFlowNodes?: any[];
    workFlowEdges?: any[];
    nodeTypes?: {};
    children?: React.ReactNode;
}
declare const WorkflowCanvas: React.ForwardRefExoticComponent<WorkflowCanvasProp & React.RefAttributes<any>>;
export { WorkflowCanvas, Handle as WorflowCanvasNodeHandle, Position as WorflowCanvasNodePosition, };
