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
  ReactFlowProvider,
  BackgroundVariant,
  type Edge,
  type Node,
  type FitViewOptions,
  type OnNodesChange,
  type OnEdgesChange,
  type OnConnect,
  type NodeTypes,
  type Connection,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
  useRef,
} from "react";

import {
  ISetCenterOptionsProp,
  IWorkflowCanvasProp,
  IWorkflowCanvasRefProp,
  IZoomOptionsProp,
  IMiniMapConfigProp,
  IBackgroundConfigProp,
} from "./types";

const WorkflowCanvasInner = forwardRef<
  IWorkflowCanvasRefProp,
  IWorkflowCanvasProp
>(
  (
    {
      workFlowEdges = [],
      workFlowNodes = [],
      nodeTypes,
      children,
      backgroundColor = "transparent",
      className = "",
      proOptions = { hideAttribution: true },
      miniMapConfig = {
        show: true,
        nodeColor: "var(--button-border2)",
        maskColor: "rgba(0,0,0,0.5)",
        width: 150,
        height: 120,
        className:
          "bg-minimap! overflow-hidden! rounded-md! border! border-button-border2!",
        zoomStep: 0.5,
      },
      backgroundConfig = {
        show: true,
        variant: BackgroundVariant.Dots,
        gap: 18,
        size: 1,
      },
      fitView: fitViewProp = true,
      fitViewOptions,
      nodesDraggable = true,
      nodesConnectable = true,
      elementsSelectable = true,
      panOnDrag = true,
      zoomOnScroll = true,
      zoomOnPinch = true,
      zoomOnDoubleClick = true,
      panOnScroll = false,
      selectNodesOnDrag = true,
      snapToGrid = false,
      snapGrid = [15, 15],
      onlyRenderVisibleElements = false,
      minZoom = 0.5,
      maxZoom = 2,
      defaultViewport,
      onNodesChange: onNodesChangeProp,
      onEdgesChange: onEdgesChangeProp,
      onConnect: onConnectProp,
      onNodeClick,
      onEdgeClick,
      onInit,
      onNodeDragStart,
      onNodeDrag,
      onNodeDragStop,
    },
    ref,
  ) => {
    const [nodes, setNodes] = useState<Node[]>(workFlowNodes);
    const [edges, setEdges] = useState<Edge[]>(workFlowEdges);

    // Use refs to track latest state for imperative handle without causing re-creation
    const nodesRef = useRef<Node[]>(nodes);
    const edgesRef = useRef<Edge[]>(edges);

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

    useImperativeHandle(
      ref,
      () => ({
        zoomIn: (options?: IZoomOptionsProp) => zoomIn(options),
        zoomOut: (options?: IZoomOptionsProp) => zoomOut(options),
        fitView: (options?: FitViewOptions) => fitView(options),
        setCenter: (x: number, y: number, options?: ISetCenterOptionsProp) =>
          setCenter(x, y, options),
        getZoom: () => getZoom(),
        getNodes: () => nodesRef.current,
        getEdges: () => edgesRef.current,
        setNodes,
        setEdges,
      }),
      [zoomIn, zoomOut, fitView, setCenter, getZoom],
    );

    const onNodesChange: OnNodesChange = useCallback(
      (changes) => {
        setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot));
        onNodesChangeProp?.(changes);
      },
      [onNodesChangeProp],
    );

    const onEdgesChange: OnEdgesChange = useCallback(
      (changes) => {
        setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot));
        onEdgesChangeProp?.(changes);
      },
      [onEdgesChangeProp],
    );
    const onConnect: OnConnect = useCallback(
      (params: Connection) => {
        setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot));
        onConnectProp?.(params);
      },
      [onConnectProp],
    );

    return (
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        onEdgeClick={onEdgeClick}
        onNodeDragStart={onNodeDragStart}
        onNodeDrag={onNodeDrag}
        onNodeDragStop={onNodeDragStop}
        onInit={onInit}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        fitView={fitViewProp}
        fitViewOptions={fitViewOptions}
        nodesDraggable={nodesDraggable}
        nodesConnectable={nodesConnectable}
        elementsSelectable={elementsSelectable}
        panOnDrag={panOnDrag}
        zoomOnScroll={zoomOnScroll}
        zoomOnPinch={zoomOnPinch}
        zoomOnDoubleClick={zoomOnDoubleClick}
        panOnScroll={panOnScroll}
        selectNodesOnDrag={selectNodesOnDrag}
        snapToGrid={snapToGrid}
        snapGrid={snapGrid}
        onlyRenderVisibleElements={onlyRenderVisibleElements}
        minZoom={minZoom}
        maxZoom={maxZoom}
        defaultViewport={defaultViewport}
        style={{ backgroundColor }}
        className={className}
      >
        {miniMapConfig.show && (
          <MiniMap
            nodeColor={miniMapConfig.nodeColor}
            maskColor={miniMapConfig.maskColor}
            className={miniMapConfig.className}
            style={{ width: miniMapConfig.width, height: miniMapConfig.height }}
            zoomStep={miniMapConfig.zoomStep}
          />
        )}
        {backgroundConfig.show && (
          <Background
            variant={backgroundConfig.variant}
            gap={backgroundConfig.gap}
            size={backgroundConfig.size}
            color={backgroundConfig.color}
            className={backgroundConfig.className}
          />
        )}
        {children}
      </ReactFlow>
    );
  },
);

WorkflowCanvasInner.displayName = "WorkflowCanvasInner";
// Wrapper with ReactFlowProvider
const WorkflowCanvas = forwardRef<IWorkflowCanvasRefProp, IWorkflowCanvasProp>(
  (props, ref) => {
    return (
      <ReactFlowProvider>
        <WorkflowCanvasInner {...props} ref={ref} />
      </ReactFlowProvider>
    );
  },
);

WorkflowCanvas.displayName = "WorkflowCanvas";

export {
  WorkflowCanvas,
  Handle as WorkflowCanvasNodeHandle,
  Position as WorkflowCanvasNodePosition,
  BackgroundVariant as WorkflowCanvasBackgroundVariant,
};
export type {
  IWorkflowCanvasProp,
  Node as WorkflowNode,
  Edge as WorkflowEdge,
  NodeTypes as WorkflowNodeTypes,
  ISetCenterOptionsProp,
  IWorkflowCanvasRefProp,
  IZoomOptionsProp,
  IMiniMapConfigProp,
  IBackgroundConfigProp,
};
