import React from 'react';
import './App.css';
import { Auth, Home }  from './pages';
import { Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route path={'/im'} component={ Home } />
        <Auth />
      </Switch>
    </div>
  );
}

export default App;
