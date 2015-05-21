var AppDispatcher = require('../dispatchers/AppDispatcher');
var Constants = require('../constants/AppConstants');

module.exports = {

  gridChanged: function(layout) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.GRID_CHANGED,
      layout: layout
    });
  },

  addBlock: function() {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.ADD_BLOCK
    });
  },

  deleteBlock: function(blockId) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.DELETE_BLOCK,
      blockId: blockId
    });
  },

  switchBlock: function(blockId) {
    AppDispatcher.handleViewAction({
      type: Constants.ActionTypes.SWITCH_BLOCK,
      blockId: blockId
    })
  }

};
