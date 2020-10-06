import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import UploadFile from "./uploadFiles.component";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Route path="/" exact component={UploadFile} />

      </div>
    </Router>
  );
}

export default App;
