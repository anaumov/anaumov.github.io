const AppDispatcher = require('../dispatchers/AppDispatcher');
const Constants = require('../constants/AppConstants');
const BaseStore = require('./BaseStore');
const assign = require('object-assign');
const _ = require('lodash');


// data storage
let _data = [
  {id: 0, type: 'text', layout: initTextLayout()},
  {id: 1, type: 'sidebar', layout: initSidebarLayout()}
];
let _currentId = 1;


function initTextLayout(){
  return {x: 0, y: 0, w: 2, h: 2};
}

function initSidebarLayout(){
  return {x: 0, y: 0, w: 1, h: 1};
}

function addBlock() {
  _currentId++;
  _data.push({id: _currentId, type: 'text', layout: initTextLayout()});
}

function switchBlock(blockId) {
  let switcherBlock = _.find(_data, function(block){return block.id == blockId});

  if (switcherBlock.type == 'text') {
    switcherBlock.type = 'sidebar';
    switcherBlock.layout = initSidebarLayout();
  } else {
    switcherBlock.type = 'text';
    switcherBlock.layout = initTextLayout();
  }
}

function deleteBlock(blockId) {
  _data = _.reject(_data, function(block){return block.id == blockId});
}

function updateLayout(layout) {
  console.log(layout);
}

let BlocksStore = assign({}, BaseStore, {

  getAll() {
    return _data;
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.type) {
      case Constants.ActionTypes.ADD_BLOCK:
        addBlock(action.blockType);
        BlocksStore.emitChange();
        break;

      case Constants.ActionTypes.DELETE_BLOCK:
        deleteBlock(action.blockId);
        BlocksStore.emitChange();
        break;

      case Constants.ActionTypes.BLOCK_CHANGED:
        changeBlock(action.block);
        BlocksStore.emitChange();
        break;

      case Constants.ActionTypes.GRID_CHANGED:
        updateLayout(action.layout);
        break;

      case Constants.ActionTypes.SWITCH_BLOCK:
        switchBlock(action.blockId);
        BlocksStore.emitChange();
        break;

      // add more cases for other actionTypes...
    }
  })

});

module.exports = BlocksStore;
