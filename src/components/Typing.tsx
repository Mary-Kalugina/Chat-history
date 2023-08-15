import '../App.css';
import React from "react";
import MessageType from "../intrefaces/MessageType";

const Typing: React.FC<{ message: MessageType }> = ({ message }) => {
  return (
    <li>
      <div className="message-data align-left">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {message.from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className='align-left'>typing...</div>
    </li>
  );
};

export default Typing;
