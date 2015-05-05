

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
    }

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
        panel.attr('id', panelName)
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
