import React from 'react';
import { Message, DialogItem, Process } from '../../components';
import './home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        {/* className=typed */}
        <DialogItem user={
          {
            fullname: 'Vitaly Kholuenko',
            avatar: 'https://avatars.mds.yandex.net/get-pdb/1209255/73b67609-f0e4-44c6-963e-e54a99b6dfff/s800',
            isOnline: true,
            lastMessage: {
              text: 'Я вернулся',
              time: '2019-09-22T13:15:00Z'
            }
          }} 
          unread='2' />

        <DialogItem user={
          {
            fullname: 'Darya Markova',
            avatar: 'https://images.all-free-download.com/images/wallpapers_thum/zoe_saldana_as_neytiri_in_avatar_5659.jpg',
            isOnline: false,
            lastMessage: {
              text: 'Люблю котиков',
              time: '2019-02-20T13:49:15Z'
            },
          }
        } unread='5' />

        <DialogItem user={
          {
            fullname: 'Natalya Smirnova',
            isOnline: false,
            lastMessage: {
              text: '',
              time: '2019-02-20T13:49:15Z'
            }
          }
        } unread='1' className='typed' />

        <Message 
          text='Привет! Как дела?' 
          timestamp={'2019-04-11T10:20:30Z'} 
          className='aligned_right' 
        />

        {/* <Message 
          text='' 
          timestamp={'2019-04-11T10:20:30Z'} 
          className='typing aligned_right' 
        /> */}

        <Message 
          text='Привет! Все отлично! Вчера вернулся из отпуска. Были в походе в горах, фоток куча потом покажу А у тебя как?' 
          timestamp={new Date().toISOString()}
          className='aligned_left dark'
          attachments={
            [
              {
                url: 'https://f.vividscreen.info/soft/b17ba1c70bfc81338843522be541202c/Invisible-240x320.jpg',
                filename: 'superman.jpg'
              },
              {
                url: 'https://www.gegli.com/uploaded/thumbnails/_01534178-EF9C-403D-96A5-08FCD0E391AB__384x288.jpg', 
                filename: 'girl.jpg'
              }
            ]
          } 
        />  

        <Message 
          text='А у меня тут теперь появился котенок. Приходи знакомиться Его зовут Андрей укашо укаука укаука укаукца уцкауцкакаукаодод' 
          timestamp={'2005-05-10T11:20:30Z'} 
          className='aligned_right'
          attachments={
            [
              {
                url: 'https://f.vividscreen.info/soft/b17ba1c70bfc81338843522be541202c/Invisible-240x320.jpg',
                filename: 'superman.jpg'
              },
              {
                url: 'https://www.gegli.com/uploaded/thumbnails/_01534178-EF9C-403D-96A5-08FCD0E391AB__384x288.jpg', 
                filename: 'girl.jpg'
              },
              {
                url: 'https://secure.diary.ru/userdir/2/3/1/9/231933/42316399.jpg',
                filename: 'minion.jpg'
              }
            ]
          }   
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