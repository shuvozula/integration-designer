/**
 * Various jsPlumb settings for rendering boxes and lines
 */


/**
 * State machine type definitions
 * @type {Object}
 */
IntegrationDesigner.Constants.basicType = {
    connector: "StateMachine",
    paintStyle: { strokeStyle: "red", lineWidth: 4 },
    hoverPaintStyle: { strokeStyle: "blue" },
    overlays: [ "Arrow" ]
};

/**
 * Paint style for the connecting lines
 * @type {Object}
 */
IntegrationDesigner.Constants.connectorPaintStyle = {
    lineWidth: 4,
    strokeStyle: "#61B7CF",
    joinstyle: "round",
    outlineColor: "white",
    outlineWidth: 2
};

/**
 * Hover style for connecting lines
 * @type {Object}
 */
IntegrationDesigner.Constants.connectorHoverStyle = {
    lineWidth: 4,
    strokeStyle: "#216477",
    outlineWidth: 2,
    outlineColor: "white"
};

/**
 * Endpoint hover style
 * @type {Object}
 */
IntegrationDesigner.Constants.endpointHoverStyle = {
    fillStyle: "#216477",
    strokeStyle: "#216477"
};

/**
 * The definition of source endpoints
 * @type {Object}
 */
IntegrationDesigner.Constants.sourceEndpoint = {
    endpoint: "Dot",
    paintStyle: {
        strokeStyle: "#7AB02C",
        fillStyle: "transparent",
        radius: 7,
        lineWidth: 3
    },
    isSource: true,
    connector: [ "Flowchart", {
        stub: [40, 60],
        gap: 10,
        cornerRadius: 5,
        alwaysRespectStubs: true
    }],
    connectorStyle: IntegrationDesigner.Constants.connectorPaintStyle,
    hoverPaintStyle: IntegrationDesigner.Constants.endpointHoverStyle,
    connectorHoverStyle: IntegrationDesigner.Constants.connectorHoverStyle,
    dragOptions: {},
    overlays: [
        [ "Label", {
            location: [0.5, 1.5],
            label: "Drag",
            cssClass: "endpointSourceLabel"
        }]
    ]
};


/**
 * The definition of target endpoints (will appear when the user drags a
 * connection)
 * @type {Object}
 */
IntegrationDesigner.Constants.targetEndpoint = {
    endpoint: "Dot",
    paintStyle: { fillStyle: "#7AB02C", radius: 11 },
    hoverPaintStyle: IntegrationDesigner.Constants.endpointHoverStyle,
    maxConnections: -1,
    dropOptions: { hoverClass: "hover", activeClass: "active" },
    isTarget: true,
    overlays: [
        [ "Label", {
            location: [0.5, -0.5],
            label: "Drop",
            cssClass: "endpointTargetLabel"
        }]
    ]
};
