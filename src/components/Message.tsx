import React from "react";
import MessageType from "../intrefaces/MessageType";
import '../App.css';


const Message: React.FC<{ message: MessageType }> = ({ message }) => {
  return (
    <li>
      <div className="message-data align-left">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i>
          {message.from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">{message.text}</div>
    </li>
  );
};

export default Message;

