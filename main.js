//import Hello from './hello.jsx';
//import World from './world.jsx';

import React from 'react';
import ReactDOM from 'react-dom';
var Cbox = require('./commentbox.jsx') /* name has to start with a capital letter*/

ReactDOM.render(<Cbox />, document.getElementById('world')); /* you have to reference what you got out of require here*/