const React = require('react');
const GridLayout = require('./GridLayout.jsx');
const Button = require('react-bootstrap').Button;
const ButtonGroup = require('react-bootstrap').ButtonGroup;
const GridActionsCreator = require('../actions/GridActionsCreator')


let App = React.createClass({

  render() {
    return (
      <div className="container">
        <ButtonGroup>
          <Button onClick={this._onAddClick}>Добавить блок</Button>
        </ButtonGroup>
        <GridLayout onLayoutChange={this._onLayoutChange}/>
      </div>
    );
  },

  _onLayoutChange(layout) {
    GridActionsCreator.gridChanged(layout);
  },

  _onAddClick() {
    GridActionsCreator.addBlock();
  }

});

module.exports = App;
