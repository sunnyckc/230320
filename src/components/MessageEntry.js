import "tailwindcss/tailwind.css";
import React from "react";

const MessageEntry = (props) => {

  const inputRef1 = React.useRef(null);
  const inputRef2 = React.useRef(null);

  const [enterMessage, setEnterMessage] = React.useState("");
  const [enterName, setEnterName] = React.useState("");

  const sendAction = props.sendAction;

  const handleClick = (ref) => {
    ref.current.select();
  };

  const messageSendHandler = () => {

    // Send the message to the record creation function
    sendAction(enterMessage, enterName);

    // Clear the fields for data entry
    setEnterMessage("");
  }

  return (
    <div className="">
      <input
        className="text-black p-2 m-1 rounded-sm"
        type="text"
        ref={inputRef1}
        onClick={() => handleClick(inputRef1)}
        onChange={(e) => setEnterName(e.target.value)}
        value={enterName}
        placeholder="Name"
      />

      <input
        className="text-black p-2 m-1 rounded-sm"
        ref={inputRef2}
        onClick={() => handleClick(inputRef2)}
        type="text"
        onclick="this.select()"
        onChange={(e) => setEnterMessage(e.target.value)}
        value={enterMessage}
        placeholder="Message"
      />

      <button onClick={() => messageSendHandler()}>Send</button>
    </div>
  );
};

export default MessageEntry;
