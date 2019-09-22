import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'antd';
import './dialog-item.scss';

const DialogItem = ({user, unread}) => {
    const avatar = user.avatar ? <img src={user.avatar} alt='user dialog icon' /> : null

    return (
        <div className='dialog-item'>
            {
                user.isOnline &&   <span className='dialog-item__avatar--online'></span>
            }
            <div className='dialog-item__avatar'>
               {avatar}
            </div>
            <div className='dialog-item__content'>
                <div className='dialog-item__content--fullname'>
                    <span>{user.fullname}</span>
                </div>
                <div className='dialog-item__content--time'>
                    <span>13:01</span>
                </div>
                <div className='dialog-item__content--short-message'>
                    <span>Очень люблю котиков</span>
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
