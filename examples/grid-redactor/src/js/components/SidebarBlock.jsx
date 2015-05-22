const React = require('react');

let SidebarBlock = React.createClass({
  render() {
    return (
      <div>
        <h3>Илья Муромец</h3>
        <img src="images/ilya_muromec.jpg" style={{width: '150px'}} />
        <p>
          Общее название нескольких серий четырёхмоторных цельнодеревянных бипланов, выпускавшихся в России на Русско-Балтийском вагонном заводе в течение 1913—1918 гг.
        </p>
      </div>
    );
  }

});

module.exports = SidebarBlock;

