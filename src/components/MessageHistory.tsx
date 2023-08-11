import React from "react";
import MessageComponent from "./Message";
import Typing from "./Typing";
import Responce from "./Response";

interface Message {
    id: string,
    from: { name: string },
    type: 'response' | 'message' | 'typing',
    time: string,
    text?: string
}

interface MessageList {
    list: Message[];
  }

const MessageHistory: React.FC<MessageList> = ({list = []}) => {
    return(
        <ul>
        {list.map((info: Message) => {
            return info.type === 'message' ? (<MessageComponent from={info.from} message={info}/>) : info.type === 'response' ? (<Responce from={info.from} message={info} />) : (<Typing from={info.from} message={info}/>)
        })}  
    </ul>)
    
}

export default MessageHistory;