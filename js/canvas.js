

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