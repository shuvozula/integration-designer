

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
}

IntegrationDesigner.Main.prototype.render = function() {
    this.pallette_.render();
    this.canvas_.render();
};