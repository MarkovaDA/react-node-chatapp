import React from 'react';
import './App.css';
import { Auth, Home }  from './pages';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  const isAuthorized = false;

  return (
    <div className="wrapper">  
      <Switch>
        {
          !isAuthorized ?  <Redirect to='/login' /> : <Redirect to='/im' />
        }
      </Switch>
      {
        !isAuthorized && <Auth />
      } 
      {
        isAuthorized && <Home />
      }
    </div>
  );
}

export default App;
