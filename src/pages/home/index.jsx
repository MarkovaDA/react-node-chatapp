import React from 'react';
import './home.scss';
import { Message } from '../../components';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <Message 
          text='Привет! Как дела?' 
          timestamp={'2019-04-11T10:20:30Z'} 
          className='aligned_right' 
        />

        <Message 
          text='Привет! Все отлично! Вчера вернулся из отпуска. Были в походе в горах, фоток куча потом покажу А у тебя как?' 
          timestamp={new Date().toISOString()}
          className='aligned_left dark' 
        />  

        <Message 
          text='А у меня тут теперь появился котенок. Приходи знакомиться Его зовут Андрей укашо укаука укаука укаукца уцкауцкакаукаодод' 
          timestamp={'2005-05-10T11:20:30Z'} 
          className='aligned_right'  
        /> 

        <Message 
          text='Он абсолютно весь рыжий и просто прелесть' 
          timestamp={'2018-05-10T11:20:30Z'} 
          className='aligned_right' 
        />

        <Message 
          text='Очень интересно... Это уже третий кот у тебя! Что стобой происходит?' 
          timestamp={'2019-02-20T13:49:15Z'} 
          className='aligned_left dark' 
        />  
      </div>
    );
  }
};
export default Home;