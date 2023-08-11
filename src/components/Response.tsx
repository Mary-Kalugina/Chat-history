import React from "react";
Message — если тип сообщения равен message;
Response — если тип сообщения равен response;
Typing — если тип сообщения равен typing.
Все три компонента принимают следующие аргументы:

from — автор сообщения, объект;
message — сообщение, объект.

export default Response;
<li>
   <div className="message-data">
      <span className="message-data-name"><i className="fa fa-circle online"></i> Виктор</span>
      <span className="message-data-time">10:12</span>
    </div>
    <div className="message my-message">
      Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.
    </div> 
    </li>
