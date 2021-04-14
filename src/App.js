import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/* Components */
import Characters from './components/Characters';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/characters">Characters</Link>

        <Route exact path="/" render = { () => {
          return <div>
            <Home />
          </div>
        }}/>

        <Route exact path="/characters" render = { () => {
          return <div>
            <Characters />
          </div>
        }}/>


      </Router>
    </div>
  );
}

export default App;
