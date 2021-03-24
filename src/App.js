import React from 'react';
import {  BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import './App.css';
import Preview from './Preview';
import WebcamCapture from './webcamCapture';

function App() {
  return (
    <div className="App">
     <Router>
       <div className="appbody">
         <Switch>
           <Route exact path="/">
             <WebcamCapture/>
           </Route>
           <Route exact path="/preview">
             <Preview/>
           </Route>
         </Switch>
       </div>
     </Router>
    </div>
  );
}

export default App;
