import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"
import {ContextProvider} from "./Context"

ReactDOM.render(
  <React.StrictMode>
   <ContextProvider> 
    <Router> 
      <App />
    </Router>
   </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

