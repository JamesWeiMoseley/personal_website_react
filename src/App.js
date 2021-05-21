import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/home';
import Sudoku from './components/pages/Sudoku';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import resume from './components/pages/resume';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/sudoku' component={Sudoku} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/resume' component={resume} />
          </Switch> 
          <Footer/> 
      </Router>
      
    </>
  );
}

export default App;
