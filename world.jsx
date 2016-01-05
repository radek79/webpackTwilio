import React from 'react';
 
class World extends React.Component {
  render() {
    return <h1>World {this.props.data.city}</h1>
  }
}

var data = {
	city : "Chicago from a json packet"
};

React.render(<World data={data} />, document.getElementById('world'));