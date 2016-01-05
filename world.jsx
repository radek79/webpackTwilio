import React from 'react';
import ReactDOM from 'react-dom';
 
class World extends React.Component {
  render() {
    return <h1>World {this.props.data.city}</h1>
  }
}

var ChildComponent = React.createClass({
  render : function() {
    return <div style={{
      color      : this.props.color,
      background : this.props.background
    }}>
      I am {this.props.color}
    </div>
  }
});
  
var ParentComponent = React.createClass({
  render : function() {
    return <ChildComponent color="blue" background="grey" />
  }
});

var data = {
	city : "Chicago from a json packet"
};

ReactDOM.render(<ParentComponent color="blue" background="red" />, document.getElementById('world'));