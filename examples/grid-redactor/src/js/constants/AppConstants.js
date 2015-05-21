const keyMirror = require('react/lib/keyMirror');

module.exports = {

  ActionTypes: keyMirror({
    ADD_BLOCK: null,
    GRID_CHANGED: null,
    SWITCH_BLOCK: null,
    DELETE_BLOCK: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })

};
