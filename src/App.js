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
            <Route path='/' exact component={Home} />
            <Route path='/sudoku' exact component={Sudoku} />
            <Route path='/contact' exact component={Contact} />
            <Route path='/resume' exact component={resume} />
          </Switch> 
          <Footer/> 
      </Router>
      
    </>
  );
}

export default App;
