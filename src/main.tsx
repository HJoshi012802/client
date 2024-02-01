import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter as Router} from "react-router-dom"
import ErrorBoundary from "./Error.Boundary";
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    
    <ErrorBoundary>
     <App/>
    </ErrorBoundary>
    
  </Router>
);
