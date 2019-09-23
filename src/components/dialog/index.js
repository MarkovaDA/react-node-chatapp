import React from 'react';
import PropTypes from 'prop-types';
import orderBy from 'lodash/orderBy';
import getTime from 'date-fns/getTime';
import { DialogItem } from '../';
import './dialog.scss';

const Dialogs = ({items}) => (
  <div className="dialogs">
    {
      orderBy(items, [(it) => getTime(new Date(it.lastMessage.time))], ['desc'])
       .map(item => 

        <DialogItem 
          className={item.isTyping ? 'typed' : ''} 
          key={item.id} user={item} 
          unread={item.unread} />
        )
    }
  </div>
);
export default Dialogs;

Dialogs.propTypes = {
  items: PropTypes.array
}

Dialogs.defaultProps = {
  items: [
    {
      id: 0,
      fullname: 'Ivan Petrov',
      isTyping: false,
      isOnline: true,
      lastMessage: {
        text: '',
        time: '2018-05-04T13:05:15'
      },
      unread: 0
    },
    { 
      id: 1,
      fullname: 'Vitaly Kholuenko',
      avatar: 'https://avatars.mds.yandex.net/get-pdb/1209255/73b67609-f0e4-44c6-963e-e54a99b6dfff/s800',
      isOnline: true,
      lastMessage: {
        text: 'Я вернулся',
        time: '2019-09-23T13:15:00Z'
      },
      unread: 2
    },
    {
      id: 2,
      fullname: 'Darya Markova',
      avatar: 'https://images.all-free-download.com/images/wallpapers_thum/zoe_saldana_as_neytiri_in_avatar_5659.jpg',
      isOnline: false,
      lastMessage: {
        text: 'Люблю котиков',
        time: '2019-02-20T13:49:15Z'
      },
      unread: 5
    }, 
    { 
      id: 5,
      fullname: 'Cat',
      avatar: 'https://pbs.twimg.com/profile_images/772971464127569920/pEevCeXG_400x400.jpg',
      isOnline: true,
      lastMessage: {
        text: 'I want to eat',
        time: '2019-09-23T10:15:00Z'
      },
      unread: 0
    },
    {
      id: 3,
      fullname: 'Natalya Smirnova',
      isTyping: false,
      isOnline: true,
      lastMessage: {
        text: '',
        time: '2019-02-22T13:49:15Z'
      },
      unread: 1
    }
  ]
}