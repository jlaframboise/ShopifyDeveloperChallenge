import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import ImageDisplay from './components/images-display.component'

function App() {
  return (
    <Router>
      <div className="container">
        <Route path="/" exact component = {ImageDisplay}/>
      </div>
    </Router>
  );
}

export default App;
