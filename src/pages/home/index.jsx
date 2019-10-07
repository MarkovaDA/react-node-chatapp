import React from 'react';
import { Message, Dialogs, AudioMessage } from '../../components';
import './home.scss';
import { Icon, Input, Button } from 'antd';
const { Search  } = Input;

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className='home__dialog--list'>
          <div className='header'>
              <Icon className='header__icon' type='usergroup-add' />
              <span className='header__title'>Диалоги</span>
              <Icon className='header__icon' type='edit' /> 
              <Search placeholder='Поиск...' size='large' />
          </div>
          <div className='content'>
            <Dialogs />
          </div>
        </div>
        <div className='home__dialog--content'>
          <div className='header'>
            <span className='header__title'>Иванов Иван Иванович</span>
            <span className='header__status'>online</span>
          </div>
          <div className='content'>
            {/* messages */}
            <AudioMessage 
              audio={'https://notificationsounds.com/soundfiles/13f3cf8c531952d72e5847c4183e6910/file-c2_men-laughing.mp3'} 
              duration={10} 
              className='dark aligned_left' />

            <Message 
              text='Привет! Как дела?' 
              timestamp={'2019-04-11T10:20:30Z'} 
              className='aligned_right' 
              />

            {/* <Message 
              text='' 
              timestamp={'2019-04-11T10:20:30Z'} 
              className='typing aligned_right' 
            />  */}

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

            <div className='home__dialog--message'>
              <Input
                size='large' 
                type='textarea'
                autosize={{minRows:2, maxRows: 6}}
                prefix={
                  <Icon type="smile"  />
                }
                suffix={
                  <>
                    <Button shape="circle">
                      <Icon type="camera"  />
                    </Button>
                    <Button shape="circle">
                      <Icon type="audio"  />
                    </Button>
                  </>
                }
                placeholder='Введите текст сообщения...' />
          </div> 

          </div>
        </div>
       
      </div>
    );
  }
};
export default Home;