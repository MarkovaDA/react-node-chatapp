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
          unread={item.unread}  />
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
      username: 'Ivan Petrov',
      firstname: 'Ivan',
      lastname: 'Petrov',
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
      username: 'Vitaly Kholuenko',
      firstname: 'Vitaly',
      lastname: 'Kholuenko',
      isOnline: true,
      lastMessage: {
        text: 'Я вернулся',
        time: '2019-09-23T13:15:00Z'
      },
      unread: 0
    },
    {
      id: 2,
      username: 'Darya Markova',
      firstname: 'Darya',
      lastname: 'Markova',
      isOnline: true,
      lastMessage: {
        text: 'Люблю котиков',
        time: '2019-02-20T13:49:15Z'
      },
      unread: 0
    }, 
    { 
      id: 5,
      username: 'Cat',
      firstname: 'Cat',
      lastname: 'Dog',
      isOnline: true,
      lastMessage: {
        text: 'I want to eat',
        time: '2019-09-23T10:15:00Z'
      },
      unread: 0
    },
    {
      id: 3,
      username: 'Albina Andreeva',
      firstname: 'Natalya',
      lastname: 'Smirnova',
      isTyping: false,
      isOnline: true,
      lastMessage: {
        text: '',
        time: '2019-02-22T13:49:15Z'
      },
      unread: 0
    }
  ]
}