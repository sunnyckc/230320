import React from "react";
import MessageEntry from "./MessageEntry";
import MessageList from "./MessageList";
import 'tailwindcss/tailwind.css';
import moment from "moment";

function MessageSystem() {

  const [messageList, setMessageList] = React.useState([]);

  const deleteMessage = (uuid) => {
    setMessageList((previous) => {
      return previous.filter((messageUnit) => {
        return messageUnit.uuid !== uuid;
      });
    });
  };

  const sendAction = (message, name) => {
    console.log("New message added: " + message + " Name: " + name);

    const now = moment();

    const messageUnit = {
      message: message,
      name: name,
      time: now.format(),
      uuid: crypto.randomUUID(),
    };

    // setMessageList([messageUnit, ...messageList]); // This is good, if render cycle is done
    setMessageList((previous) => {
      console.log("previous", previous);
      return [messageUnit, ...previous];
    }); // This is always good
  };

  // Use this to monitor the message list when it changes
  React.useEffect(() => {
    console.log("New", messageList);
  }, [messageList]);

  return (
    <div className="h-screen bg-blue-500">
      <MessageEntry sendAction={sendAction} />
      <MessageList messageList={messageList} deleteMessage={deleteMessage}/>
    </div>
  );
}

export default MessageSystem;
