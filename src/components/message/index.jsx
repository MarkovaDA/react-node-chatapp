import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";
import Time from './../time';
import './message.scss';

const Message = ({avatar, text, timestamp, className, attachments}) => {
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
          <Time timeStamp={timestamp} />
        </div>
        <div className="message__content--typing">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="message__attachments">
        {
          attachments && attachments.map(({url, filename}, index) => 
            <div className="message__attachments--item" key={index}>
              <img src={url} />
            </div>
          )
        }
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