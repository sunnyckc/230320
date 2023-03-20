import React, { useState, useEffect } from "react";
import moment from "moment";

const MessageUnit = (props) => {
  const { message, name, time, uuid } = props.messageUnit;
  const deleteMessage = props.deleteMessage;

  const [timeText, setTimeText] = useState("");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  // Set timer to refresh every 5 seconds
  useEffect(() => {
    
    const interval = setInterval(() => {
      const now = moment();
      const then = moment(time);
      const seconds = now.diff(then, "seconds");
      let newTimeText = "";

      switch (true) {
        case seconds < 60:
          newTimeText = `${seconds} seconds ago`;
          break;
        case seconds < 3600:
          newTimeText = `${Math.floor(seconds / 60)} minutes ago`;
          break;
        case seconds < 86400:
          newTimeText = `${Math.floor(seconds / 3600)} hours ago`;
          break;
        default:
          newTimeText = `${Math.floor(seconds / 86400)} days ago`;
          break;
      }

      setTimeText(newTimeText);
    }, 5000); // update every 5 seconds

    return () => clearInterval(interval); // clear interval on unmount
  }, [time]);

  const handleDelete = () => {
    setShowDeleteConfirmation(true);
  };

  const handleConfirmDelete = () => {
    deleteMessage(uuid);
  };

  const handleCancelDelete = () => {
    setShowDeleteConfirmation(false);
  };

  return (
    <div className="relative my-4 bg-white">
      <p className="font-bold text-black">{name}:</p>
      <p className="text-sm text-black">{message}</p>
      <p className="absolute bottom-0 right-0 text-black">{timeText}</p>

      {showDeleteConfirmation ? (
        <div>
          <p className="text-sm text-red-500">
            Are you sure you want to delete this message?
          </p>
          <button
            className="text-sm text-red-500"
            onClick={handleConfirmDelete}
          >
            Yes
          </button>
          <button
            className="text-sm text-gray-400"
            onClick={handleCancelDelete}
          >
            No
          </button>
        </div>
      ) : (
        <button className="text-sm text-black" onClick={handleDelete}>
          del
        </button>
      )}
    </div>
  );
};

export default MessageUnit;
