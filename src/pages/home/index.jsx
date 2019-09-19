import React from 'react';
import './home.scss';
import { Message } from '../../components';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <h1>home page</h1>
        <br/>
        <Message />
      </div>
    );
  }
};
export default Home;