import React from 'react';
import ReactDOM from "./react-dom-renderWithProfiler"; // could be part of React/ReactDOM
import './index.css';
import App from './App';

ReactDOM.renderWithProfiler(<App />, document.getElementById('root'));
