import React from 'react';
import { Link } from 'react-router-dom';
import { FaComments } from 'react-icons/fa';
import '../index.css';

const Chat = () => {
  return (
    <Link to='/contact'>
      <button className='chat-button btn-lg'>
        <FaComments />
        <span className='chat-text'>Contact Me</span>
      </button>
    </Link>
  );
};

export default Chat;
