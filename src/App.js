import React from 'react';
import './App.css';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Custom_build from './components/pages/custom_build';
import Build_scratch from './components/pages/build_scratch';
import signup from './components/pages/signup';
import Login from './components/pages/Login'
import HomeSigned from './components/pages/HomeSigned';
import Shop from './components/pages/Shop';
import guides from './components/pages/guides';
import entry from './components/pages/Guides/entry';
import budget from './components/pages/Guides/budget';
import medium from './components/pages/Guides/medium';
import excellent from './components/pages/Guides/excellent';



function App() {

  return (
    <>
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/HomeSigned' exact component={HomeSigned} />
        <Route path='/signup'  exact component={signup}/>
        <Route path='/custom_build' exact component={Custom_build}/>
        <Route path='/build_scratch' exact component={Build_scratch}/>
        <Route path='/login' exact component={Login} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/guides' exact component={guides} />
        <Route path='/entry' exact component={entry} />
        <Route path='/budget' exact component={budget} />
        <Route path='/medi' exact component={medium} />
        <Route path='/advanced' exact component={excellent} />
        <Route path='/build_scratch/cpu' exact component={Shop} />

      </Switch>
    </Router>
    </>
  );
}

export default App;
