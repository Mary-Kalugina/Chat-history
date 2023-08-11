import React from "react";
import Data from "../intrefaces/Data";


const Typing: React.FC<Data> = ({ from, message }) {
    return (<li>
        <div className="message-data">
          <span className="message-data-name">
            <i className="fa fa-circle online"></i>
            {from.name}
          </span>
          <span className="message-data-time">{message.time}</span>
        </div>
        <div className="message my-message">{message.text}</div>
      </li>
    )   
}

export default Typing;