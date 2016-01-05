import React from 'react';
import ReactDOM from 'react-dom';

 
class World extends React.Component {
  render() {
    return <h1>World {this.props.data.city}</h1>
  }
}

var data = {
	city : "Chicago from a json packet"
};