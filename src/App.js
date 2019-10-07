import React from 'react';
import { Auth, Home }  from './pages';
import { Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppMenu } from './components';
import './App.css';

const App = (props) => {
  const isAuthorized = props.user.token  || localStorage.getItem('token');

  return (
      <div className="app">
        {
          isAuthorized ? 
          <div className="app__header">
            <AppMenu />
           </div> : null
        }  
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

export default connect(
  ({user}) => {
    return {user}
  },
  () => {
    return {}
  }
)(App);
