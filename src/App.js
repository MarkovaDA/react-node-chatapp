import React from 'react';
import './App.css';
import { Auth, Home }  from './pages';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="wrapper">
      <Route exact path={'/login'} component={ Auth } />
      <Route exact path={'/im'} component={ Home } />
    </div>
  );
}

export default App;
