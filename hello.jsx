import React from 'react';
 
class Hello extends React.Component {
  render() {
    return <h1>Hi there</h1>
  }
}

React.render(<Hello/>, document.getElementById('hello'));