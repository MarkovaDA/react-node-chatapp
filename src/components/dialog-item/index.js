import React from 'react';
import PropTypes from 'prop-types';
import Time from './../time';
import { Badge } from 'antd';
import differenceInDays from 'date-fns/differenceInDays';

import './dialog-item.scss';

const DialogItem = ({user, unread}) => {
    const format = differenceInDays(new Date(), new Date(user.lastMessage.time)) < 1 ? 'HH:mm' : 'dd/MM';

    return (
        <div className='dialog-item'>
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
                    <Time timeStamp={user.lastMessage.time} format={format} />
                </div>
                <div className='dialog-item__content--short-message'>
                    {
                        user.lastMessage && <span>{user.lastMessage.text}</span>
                    }
                </div>
                <div className='dialog-item__content--count-unread'>
                    <Badge count={unread} />
                </div>
            </div>
        </div>
    )
}

DialogItem.propTypes = {
    user: PropTypes.object
}

export default DialogItem;
