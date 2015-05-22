const React = require('react');
const ReactGridLayout = require('react-grid-layout');
const _ = require('lodash');
const Label = require('react-bootstrap').Label;
const ElementalBlock = require('./ElementalBlock.jsx');
const BlocksStore = require('../stores/BlocksStore');
const GridActionsCreator = require('../actions/GridActionsCreator');

let GridLayout = React.createClass({
  propTypes: {
    onLayoutChange: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      blocks: BlocksStore.getAll(),
      layout: this._generateBlocksLayout()
    }
  },

  _onChange(){
    this.setState({
      blocks: BlocksStore.getAll(),
      layout: this._generateBlocksLayout()
    })
  },

  componentDidMount(){
    BlocksStore.addChangeListener(this._onChange)
  },

  componentWillUnmount(){
    BlocksStore.removeChangeListener(this._onChange)
  },

  _generateBlocksLayout(){
    return _.map(BlocksStore.getAll(), function(block){
      let blockLayout = block.layout;
      blockLayout.i = block.id;
      return blockLayout;
    });
  },

  _blocksDOM() {
    return _.map(this.state.blocks, function(block) {
      return <ElementalBlock key={block.id} block={block}/>
    });
  },

  onLayoutChange: function(layout) {
    //this.props.onLayoutChange(layout);
    //GridActionsCreator.gridChanged(layout);
  },

  render() {
    return (
      <ReactGridLayout
        cols={4}
        rowHeight={200}
        verticalCompact={false}
        onLayoutChange={this.onLayoutChange}
        layout={this.state.layout}>
        {this._blocksDOM()}
      </ReactGridLayout>
    );
  }
});

module.exports = GridLayout;