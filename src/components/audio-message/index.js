import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Time, Process }  from './../';
import { Icon } from 'antd';
import './audio-message.scss';
import './../message/message.scss';

const AudioMessage =  ({avatar, audio, timestamp}) => {
  const [isRunning, setRunning] = useState(false);
  const [isProcessed] = useState(false);

  const audioPlayer = useRef(null);

  const play = () => {
    setRunning(true);
    audioPlayer.current.play();
  };

  const pause = () => {
    setRunning(false);
    audioPlayer.current.pause();
  }

  return (
    <div className="message aligned_left audio-message dark">
      <div className="message__avatar">
        { 
          avatar && <img src={avatar} alt='User icon' />
        }
      </div>
      <div className="message__content">
        <div className="message__content--text">

          <audio src={audio} ref={audioPlayer} preload="audio" />

          {
            isRunning ?  
              <Icon type="pause-circle" theme='filled' onClick={pause}/> : 
              <Icon type="play-circle" theme='filled'  onClick={play} />
          }
          { 
            isProcessed && <Process /> 
          }
          <span className="message__content--duration">00:19</span>
          <span className="message__process"></span>
        </div>
        <div className="message__content--date">
          <Time timeStamp={new Date().toISOString()} />
        </div>
      </div>
    </div>
  )
}

AudioMessage.propTypes = {
  avatar: PropTypes.string,
  audio: PropTypes.string, 
  timestamp: PropTypes.string
}

export default AudioMessage;