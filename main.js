//import Hello from './hello.jsx';
//import World from './world.jsx';

import React from 'react';
import ReactDOM from 'react-dom';
var CBox = require('./commentbox.jsx') /* name has to start with a capital letter*/

/*this should come from the backend*/
var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(<CBox data={data} />, document.getElementById('world')); /* you have to reference what you got out of require here*/