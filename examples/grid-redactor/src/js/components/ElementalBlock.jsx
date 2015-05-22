const React = require('react');
const Button = require('react-bootstrap').Button;
const ButtonGroup = require('react-bootstrap').ButtonGroup;
const Glyphicon = require('react-bootstrap').Glyphicon;
const TextBlock = require('./TextBlock.jsx');
const SidebarBlock = require('./SidebarBlock.jsx');
const GridActionsCreator = require('../actions/GridActionsCreator')

let ElementalBlock = React.createClass({
  getInitialState(){
    return {
      block: this.props.block
    };
  },

  render() {
    let innerComponent = null;

    if (this.state.block.type == 'text') {
      innerComponent = <TextBlock />;
    } else {
      innerComponent = <SidebarBlock />;
    }


    return (
      <div {...this.props}>
        {innerComponent}
        <ButtonGroup className="tweek-block">
          <Button onClick={this._onRemoveClick}><Glyphicon glyph='remove' /></Button>
          <Button onClick={this._onSwitchClick}><Glyphicon glyph='refresh' /></Button>
        </ButtonGroup>
      </div>
    );
  },

  _onSwitchClick(){
    GridActionsCreator.switchBlock(this.state.block.id);
  },

  _onRemoveClick(e){
    GridActionsCreator.deleteBlock(this.state.block.id);
  }

});

module.exports = ElementalBlock;

