import React from 'react';
import PropTypes from 'prop-types';
import Process from './../process';
import { Badge } from 'antd';
import isToday from 'date-fns/isToday';
import format from 'date-fns/format';
import classNames from "classnames";

import './dialog-item.scss';

const DialogItem = ({user, unread, className}) => {
    const createdAt = new Date(user.lastMessage.time);
    const formattedDate = isToday(createdAt) ? format(createdAt, 'HH:mm') : format(createdAt, 'dd/MM/yyyy');

    return (
        <div className={classNames('dialog-item', className)}>
            {
                user.isOnline &&  <span className='dialog-item__avatar--online'></span>
            }
            <div className='dialog-item__avatar'>
               {
                   user.avatar && <img src={user.avatar} alt='user dialog icon' />
               }
            </div>
            <div className='dialog-item__content'>
                <div className='dialog-item__content--fullname'>
                    <span>{user.fullname}</span>
                </div>
                <div className='dialog-item__content--time'>
                   {formattedDate}
                </div>
                <div className='dialog-item__content--short-message'>
                    {
                        user.lastMessage && <span>{user.lastMessage.text}</span>
                    }
                </div>
                <div className='dialog-item__content--count-unread'>
                    <Badge count={unread} />
                </div>
                <div className='dialog-item__content--typed'>
                    <Process  />
                </div>
            </div>
        </div>
    )
}

DialogItem.propTypes = {
    user: PropTypes.object
}

export default DialogItem;
