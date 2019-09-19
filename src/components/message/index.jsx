import React from 'react';
import PropTypes from 'prop-types';
import './message.scss';

const Message = props => (
  <div className="message">
    <div className="message__avatar">
    </div>
    <div className="message__content">
      <div className="message__content--text">
        текст сообщения текст сообщения текст сообщения текст сообщения текст сообщения
      </div>
      <div className="message__content--date">
        23.05
      </div>
    </div>
  </div>
);

Message.propTypes = {
  className: PropTypes.string
}

export default Message;