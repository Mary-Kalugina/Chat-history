import React from "react";
import Data from "../intrefaces/Data";


const Message: React.FC<Data> = ({ from, message }) => {
  return (
    <li className="clearfix">
    <div className="message-data align-right">
      <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
      <span className="message-data-name">{from.name}</span>
      <i className="fa fa-circle me"></i>
    </div>
    <div className="message other-message float-right">
      {message.text}
    </div>
      </li>
  );
};


export default Message;