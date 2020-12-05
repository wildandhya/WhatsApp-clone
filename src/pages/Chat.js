/** @format */

import React, { useState, useEffect } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  MoreVert,
  AttachFile,
  InsertEmoticon,
  Mic,
} from "@material-ui/icons";

function Chat() {
  const [seed, setSeed] = useState("");
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("ha", inputText);
    setInputText("");
  };
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='chat_headerInfo'>
          <h3>Room Name</h3>
          <p>lasst message</p>
        </div>
        <div className='chat_headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        <p className={`chat_message ${true && "chat_reciever"}`}>
          <span className='chat_name'>Wildan</span>
          Hey
          <span className='chat_timestamp'>3:19am</span>
        </p>
      </div>
      <div className='chat_footer'>
        <InsertEmoticon />
        <form>
          <input
            placeholder='Type a message'
            type='text'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type='submit' onClick={sendMessage}>
            {" "}
            Send a message
          </button>
        </form>

        <Mic />
      </div>
    </div>
  );
}

export default Chat;
