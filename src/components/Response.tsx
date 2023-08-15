import React from "react";
import MessageType from "../intrefaces/MessageType";
import '../App.css';


const Responce: React.FC<{ message: MessageType }> = ({ message }) => {
  return (
    <li className="clearfix">
    <div className="message-data align-right">
      <span className="message-data-time padding-right">{message.time}</span>
      <span className="message-data-name">{message.from.name}</span>
      <i className="fa fa-circle me"></i>
    </div>
    <div className="message other-message float-right">
      {message.text}
    </div>
      </li>
  );
};


export default Responce;