import React from "react";
import './App.css';
import MessageHistory from "./components/MessageHistory";
import MessageType from "./intrefaces/MessageType";

const App: React.FC = () => {
  const MSGlist: MessageType[] = [{
    id: 'chat-5-1090',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:10',
    text: 'Привет, Виктор. Как дела? Как идёт работа над проектом?'
  }, {
    id: 'chat-5-1091',
    from: { name: 'Виктор' },
    type: 'message',
    time: '10:12',
    text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.'
  }, {
    id: 'chat-5-1092',
    from: { name: 'Ольга' },
    type: 'response',
    time: '10:14',
    text: 'Не уверена, что сегодня получится. Всё ещё в офисе. Давай уточню через час. Возникли ли какие-либо проблемы на последней стадии проекта?'
  }, {
    id: 'chat-5-1093',
    from: { name: 'Виктор' },
    type: 'message',
    time: '10:20',
    text: 'Нет, всё прошло гладко. Очень хочу показать всё команде.'
  }, {
    id: 'chat-5-1094',
    from: { name: 'Виктор' },
    type: 'typing',
    time: '10:31'
  }];

  return (
    <div className="container">
      <div className="people-list">
      </div>
      <div className="chat">
        <div className="chat-header">
        </div>
        <div className="chat-history">
            {MSGlist.length ? <MessageHistory list={MSGlist} /> : null}
        </div>
      </div>
    </div>
  );
}

export default App;