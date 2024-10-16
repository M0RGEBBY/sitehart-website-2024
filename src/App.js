import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import Home from './components/pages/Home';
import Examples from './components/pages/Examples';
import projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import ComingSoon from './components/pages/ComingSoon';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/Examples' exact Component={Examples}></Route>
          <Route path='/Projects' exact Component={projects}></Route>
          <Route path='/resume' exact Component={Resume}></Route>
          <Route path='/coming-soon' exact Component={ComingSoon}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
library.add(fab, fas, far)
