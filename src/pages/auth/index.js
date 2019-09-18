import React from 'react';
import { Card } from './../../components';
import { Login } from './../../modules/login';
import { Route, Link} from 'react-router-dom';

import './auth.scss';

class Auth extends React.Component {
  render() {
    return (
      <div className='auth'>
        <div className='auth__header'>
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <div className='auth__content'>
          <Card className='card__shadowed'>
            <Login />
            <Route path='/register' render={() => <h1>Register form</h1>} />
          </Card>
        </div>
      </div>
    );
  }
};
export default Auth;