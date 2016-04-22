var React = require('react')

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello from Main component</p>
        <div>{this.props.children}</div>
      </div>
    )
  }
})

module.exports = Main