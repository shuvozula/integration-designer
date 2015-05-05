/**
 * Namespaces
 */

var IntegrationDesigner = IntegrationDesigner || {};

IntegrationDesigner.Main = {};
IntegrationDesigner.Canvas = {};
IntegrationDesigner.Pallette = {};



IntegrationDesigner.Canvas = function(canvasContainer) {

    /**
     * Canvas container jQuery element
     * @type {Object}
     * @private
     */
    this.container_ = canvasContainer;

    /**
     * jsPlumb instance registered to the canvas
     * @type {Object}
     * @private
     */
    this.jsPlumbObj_ = jsPlumb.getInstance({
        PaintStyle: {
            lineWidth: 6,
            strokeStyle: '#567567',
            outlineColor: 'black',
            outlineWidth: 1
        },
        Connector: ['Bezier', {curviness: 30}],
        Endpoint: ['Dot', {radius: 5}],
        EndpointStyle: {fillStyle: '#567567'},
        Anchor : [0.5, 0.5, 1, 1],
        Container: this.container_
    });
};


/**
 * Initializes the canvas with all the jsPlumb objects.
 * @return {[type]} [description]
 */
IntegrationDesigner.Canvas.prototype.render = function() {
    this.registerListeners_();
};

/**
 * Registers drag/drop listeners whenever something from the pallette is dropped
 * into the canvas.
 * @private
 */
IntegrationDesigner.Canvas.prototype.registerListeners_ = function() {

    var elemTitle, elemImg;
    var self = this;
    this.container_.droppable({
        drop: function (event, elem) {
            elemImg = elem.helper.children(':first').attr('src');
            elemTitle = elem.helper.children(':last').text();
            self.addElement_(elemTitle, elemImg);
        }
    });
};

/**
 * Adds a jsPlumb element to the canvas based on dropped element details.
 * @param {String} title   Title of element.
 * @param {[type]} imgPath [description]
 */
IntegrationDesigner.Canvas.prototype.addElement_ = function(title, imgPath) {
    console.log(title);
    // this.jsPlumbObj_.
};



/**
 * Creates the container and the listeners for dragging components/transformers
 * into the canvas designer.
 * @param {Object} palletteContainer jQuery object pointing to the pallete DIV.
 */
IntegrationDesigner.Pallette = function(palletteContainer) {

    /**
     * JSON content describing the various connectors/connectors available
     * for use in the Integration canvas. Usually this will be JSON data sent
     * from backend based on tenant information.
     * @type {Object}
     * @private
     */
    this.palleteDefinition_ = {
        "endpoints": {
            "sfdc": {
                "label": "Salesforce",
                "img": "img/sfdc.jpg"
            },
            "anaplan": {
                "label": "Anaplan",
                "img": "img/anaplan.png"
            },
            "file": {
                "label": "File",
                "img": "img/fileconnector.png"
            },
            "db": {
                "label": "Database",
                "img": "img/database.png"
            }
        },
        "transformers": {
            "aggregator": {
                "label": "Aggregator",
                "img": "img/gears.png",
            },
            "filter": {
                "label": "Filter",
                "img": "img/gears.png"
            },
            "datamapper": {
                "label": "Data Mapper",
                "img": "img/gears.png"
            }
        }
    };

    /**
     * Pallette container jQuery element
     * @type {Object}
     * @private
     */
    this.container_ = palletteContainer;
};

/**
 * Renders the pallette.
 */
IntegrationDesigner.Pallette.prototype.render = function() {

    var panel, intElem;

    for (var panelName in this.palleteDefinition_) {
        // create the panel element for this pallette
        panel = $(document.createElement('div'));
        panel.attr('id', panelName);
        panel.addClass('panel-container');
        // create the integration elements for this panel
        for (var intElemName in this.palleteDefinition_[panelName]) {
            intElem = $(document.createElement('div'));
            intElem.attr('id', intElemName);
            intElem.addClass('panel-element');
            intElem.addClass(panelName);
            // add the image icon to the integration element
            intElem.append($(document.createElement('img')).attr(
                'src', this.palleteDefinition_[panelName][intElemName].img));
            intElem.append($(document.createElement('span'))
                .text(this.palleteDefinition_[panelName][intElemName].label)
                .addClass('label'));
            // make the element draggable to canvas
            intElem.draggable({
                addClasses: false,
                cursor: 'move',
                helper: 'clone'
            });
            panel.append(intElem);
        }
        this.container_.append(panel);
    }
};



IntegrationDesigner.Main = function() {

    /**
     * Container Map with references to the jQuery container
     * elements.
     * @type {Object.{String, jQuery-Object}}
     * @private
     */
    this.containers_ = {
        topLevelContainer: $('.top-level-container'),
        palletteContainer: $('.pallette-container'),
        canvasContainer: $('.canvas-container')
    };

    /**
     * Canvas manager
     * @type {IntegrationDesigner.Canvas}
     */
    this.canvas_ = new IntegrationDesigner.Canvas(this.containers_.canvasContainer);

    /**
     * Pallette manager
     * @type {IntegrationDesigner.Pallette}
     */
    this.pallette_ = new IntegrationDesigner.Pallette(this.containers_.palletteContainer);
};

IntegrationDesigner.Main.prototype.render = function() {
    this.pallette_.render();
    this.canvas_.render();
};
