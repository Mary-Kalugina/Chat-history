import React from "react";
import MessageComponent from "./Message";
import Typing from "./Typing";
import Responce from "./Response";
import MessageType from "../intrefaces/MessageType";
import '../App.css';

interface MessageList {
    list: MessageType[];
  }

const MessageHistory: React.FC<MessageList> = ({list}) => {
    return(
        <ul>
        {list.map((info) => {
            return info.type === 'message' ? (<MessageComponent message={info}/>) : info.type === 'response' ? (<Responce message={info} />) : (<Typing message={info}/>)
        })}  
    </ul>)
    
}

export default MessageHistory;