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
import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";

import {
  ISetCenterOptionsProp,
  IWorkflowCanvasProp,
  IWorkflowCanvasRefProp,
  IZoomOptionsProp,
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
      ProOptions = { hideAttribution: true },
      miniMapConfig = {},
      backgroundConfig = {},
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
    const { zoomIn, zoomOut, fitView, setCenter, getZoom } = useReactFlow();

    // Expose methods to parent via ref
    useImperativeHandle(ref, () => ({
      zoomIn: (options?: IZoomOptionsProp) => zoomIn(options),
      zoomOut: (options?: IZoomOptionsProp) => zoomOut(options),
      fitView: (options?: FitViewOptions) => fitView(options),
      setCenter: (x: number, y: number, options?: ISetCenterOptionsProp) =>
        setCenter(x, y, options),
      getZoom: () => getZoom(),
      getNodes: () => nodes,
      getEdges: () => edges,
      setNodes,
      setEdges,
    }));

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
        proOptions={ProOptions}
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
};
