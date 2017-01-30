require("../styles/application.scss");

import injectTapEventPlugin from 'react-tap-event-plugin';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';


injectTapEventPlugin();
ReactDOM.render(<App />, document.getElementById('app'));
