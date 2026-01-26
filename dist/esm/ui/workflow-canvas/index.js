"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, Background, MiniMap, useReactFlow, Handle, Position, ReactFlowProvider, BackgroundVariant, } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState, useCallback, forwardRef, useImperativeHandle, useEffect, useRef, } from "react";
const WorkflowCanvasInner = forwardRef(({ workFlowEdges = [], workFlowNodes = [], nodeTypes, children, backgroundColor = "transparent", className = "", proOptions = { hideAttribution: true }, miniMapConfig = {
    show: true,
    nodeColor: "var(--button-border2)",
    maskColor: "rgba(0,0,0,0.5)",
    width: 150,
    height: 120,
    className: "bg-minimap! overflow-hidden! rounded-md! border! border-button-border2!",
    zoomStep: 0.5,
}, backgroundConfig = {
    show: true,
    variant: BackgroundVariant.Dots,
    gap: 18,
    size: 1,
}, fitView: fitViewProp = true, fitViewOptions, nodesDraggable = true, nodesConnectable = true, elementsSelectable = true, panOnDrag = true, zoomOnScroll = true, zoomOnPinch = true, zoomOnDoubleClick = true, panOnScroll = false, selectNodesOnDrag = true, snapToGrid = false, snapGrid = [15, 15], onlyRenderVisibleElements = false, minZoom = 0.5, maxZoom = 2, defaultViewport, onNodesChange: onNodesChangeProp, onEdgesChange: onEdgesChangeProp, onConnect: onConnectProp, onNodeClick, onEdgeClick, onInit, onNodeDragStart, onNodeDrag, onNodeDragStop, }, ref) => {
    const [nodes, setNodes] = useState(workFlowNodes);
    const [edges, setEdges] = useState(workFlowEdges);
    // Use refs to track latest state for imperative handle without causing re-creation
    const nodesRef = useRef(nodes);
    const edgesRef = useRef(edges);
    useEffect(() => {
        nodesRef.current = nodes;
    }, [nodes]);
    useEffect(() => {
        edgesRef.current = edges;
    }, [edges]);
    useEffect(() => {
        setNodes(workFlowNodes);
    }, [workFlowNodes]);
    useEffect(() => {
        setEdges(workFlowEdges);
    }, [workFlowEdges]);
    const { zoomIn, zoomOut, fitView, setCenter, getZoom } = useReactFlow();
    useImperativeHandle(ref, () => ({
        zoomIn: (options) => zoomIn(options),
        zoomOut: (options) => zoomOut(options),
        fitView: (options) => fitView(options),
        setCenter: (x, y, options) => setCenter(x, y, options),
        getZoom: () => getZoom(),
        getNodes: () => nodesRef.current,
        getEdges: () => edgesRef.current,
        setNodes,
        setEdges,
    }), [zoomIn, zoomOut, fitView, setCenter, getZoom]);
    const onNodesChange = useCallback((changes) => {
        setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot));
        onNodesChangeProp === null || onNodesChangeProp === void 0 ? void 0 : onNodesChangeProp(changes);
    }, [onNodesChangeProp]);
    const onEdgesChange = useCallback((changes) => {
        setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot));
        onEdgesChangeProp === null || onEdgesChangeProp === void 0 ? void 0 : onEdgesChangeProp(changes);
    }, [onEdgesChangeProp]);
    const onConnect = useCallback((params) => {
        setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot));
        onConnectProp === null || onConnectProp === void 0 ? void 0 : onConnectProp(params);
    }, [onConnectProp]);
    return (_jsxs(ReactFlow, { nodes: nodes, edges: edges, onNodesChange: onNodesChange, onEdgesChange: onEdgesChange, onConnect: onConnect, onNodeClick: onNodeClick, onEdgeClick: onEdgeClick, onNodeDragStart: onNodeDragStart, onNodeDrag: onNodeDrag, onNodeDragStop: onNodeDragStop, onInit: onInit, nodeTypes: nodeTypes, proOptions: proOptions, fitView: fitViewProp, fitViewOptions: fitViewOptions, nodesDraggable: nodesDraggable, nodesConnectable: nodesConnectable, elementsSelectable: elementsSelectable, panOnDrag: panOnDrag, zoomOnScroll: zoomOnScroll, zoomOnPinch: zoomOnPinch, zoomOnDoubleClick: zoomOnDoubleClick, panOnScroll: panOnScroll, selectNodesOnDrag: selectNodesOnDrag, snapToGrid: snapToGrid, snapGrid: snapGrid, onlyRenderVisibleElements: onlyRenderVisibleElements, minZoom: minZoom, maxZoom: maxZoom, defaultViewport: defaultViewport, style: { backgroundColor }, className: className, children: [miniMapConfig.show && (_jsx(MiniMap, { nodeColor: miniMapConfig.nodeColor, maskColor: miniMapConfig.maskColor, className: miniMapConfig.className, style: { width: miniMapConfig.width, height: miniMapConfig.height }, zoomStep: miniMapConfig.zoomStep })), backgroundConfig.show && (_jsx(Background, { variant: backgroundConfig.variant, gap: backgroundConfig.gap, size: backgroundConfig.size, color: backgroundConfig.color, className: backgroundConfig.className })), children] }));
});
WorkflowCanvasInner.displayName = "WorkflowCanvasInner";
// Wrapper with ReactFlowProvider
const WorkflowCanvas = forwardRef((props, ref) => {
    return (_jsx(ReactFlowProvider, { children: _jsx(WorkflowCanvasInner, Object.assign({}, props, { ref: ref })) }));
});
WorkflowCanvas.displayName = "WorkflowCanvas";
export { WorkflowCanvas, Handle as WorkflowCanvasNodeHandle, Position as WorkflowCanvasNodePosition, BackgroundVariant as WorkflowCanvasBackgroundVariant, };
