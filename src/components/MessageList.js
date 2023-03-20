import React from "react";
import MessageUnit from "./MessageUnit";

const MessageList = (props) => {
  const messageList = props.messageList;
  const deleteMessage = props.deleteMessage;

  console.log(messageList);

  return (
    <div>
      {messageList.map((messageUnit, index) => {
        return (
          <MessageUnit messageUnit={messageUnit} key={index} deleteMessage={deleteMessage}/>
        );
      })}
    </div>
  );
};

export default MessageList;
