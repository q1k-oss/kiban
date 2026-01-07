"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, MiniMap, useReactFlow, Handle, Position, ReactFlowProvider, } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState, useCallback, forwardRef, useImperativeHandle, } from "react";
const WorkflowCanvasInner = forwardRef(({ workFlowEdges, workFlowNodes, nodeTypes, children }, ref) => {
    const [nodes, setNodes] = useState(workFlowNodes);
    const [edges, setEdges] = useState(workFlowEdges);
    const { zoomIn, zoomOut, fitView } = useReactFlow();
    // Expose methods to parent via ref
    useImperativeHandle(ref, () => ({
        zoomIn: (options) => zoomIn(options),
        zoomOut: (options) => zoomOut(options),
        fitView: (options) => fitView(options),
    }));
    const onNodesChange = useCallback((changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)), []);
    const onEdgesChange = useCallback((changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)), []);
    const onConnect = useCallback((params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)), []);
    return (_jsxs(ReactFlow, { nodes: nodes, edges: edges, onNodesChange: onNodesChange, onEdgesChange: onEdgesChange, onConnect: onConnect, nodeTypes: nodeTypes, proOptions: { hideAttribution: true }, fitView: true, children: [_jsx(MiniMap, { nodeColor: "var(--button-border2)", maskColor: "var(--minimap)", className: "bg-minimap! overflow-hidden! rounded-md! border! border-button-border2!", style: { width: 150, height: 120 }, zoomStep: 0.5 }), _jsx(Background, {}), children] }));
});
WorkflowCanvasInner.displayName = "WorkflowCanvasInner";
// Wrapper with ReactFlowProvider
const WorkflowCanvas = forwardRef((props, ref) => {
    return (_jsx(ReactFlowProvider, { children: _jsx(WorkflowCanvasInner, Object.assign({}, props, { ref: ref })) }));
});
WorkflowCanvas.displayName = "WorkflowCanvas";
export { WorkflowCanvas, Handle as WorflowCanvasNodeHandle, Position as WorflowCanvasNodePosition, };
