import React from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar';
import MainSection from './components/MainSection/MainSection';
import {StaticRouter as Router, Switch, Route} from 'react-router-dom';
import LeftSection from './components/LeftSection/LeftSection';
import RightSection from './components/RightSection/RightSection';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/posts">
            <LeftSection />
            <RightSection />
          </Route>
          <Route path="/">
            <SideBar />
            <MainSection />
          </Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
