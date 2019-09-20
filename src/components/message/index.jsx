import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import formatDistance  from 'date-fns/formatDistance';
import formatDate from 'date-fns/format';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import differenceInYear from 'date-fns/differenceInYears';

import ruLocale from 'date-fns/locale/ru';
import './message.scss';

const Message = ({avatar, text, timestamp, className}) => {
  const date = new Date(timestamp);
  const now = new Date();
  
  const formattedDate =  
    differenceInYear(now, date) > 5 || differenceInMinutes(now, date) < 5 ? 
    formatDistance(date, now, {addSuffix: true, locale: ruLocale}) :
    formatDate(date, 'dd MMMM yyyy HH:mm', {locale: ruLocale})

  return (
    <div className={classNames('message', className)}>
      <div className="message__avatar">
        { 
          avatar && <img src={avatar} alt='User icon'/>
        }
      </div>
      <div className="message__content">
        <div className="message__content--text">
          {text}
        </div>
        <div className="message__content--date">
          {formattedDate}
        </div>
      </div>
    </div>
  )
};

Message.propTypes = {
  className: PropTypes.string,
  avatar: PropTypes.string,
  text: PropTypes.string,
  timestamp: PropTypes.string
}

export default Message;