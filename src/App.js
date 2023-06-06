import './App.css';
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Demo from './Demo';
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
      <Route path='/demo' element={<Demo/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
