import React, { useState } from 'react'

import THREAD from "../thread"

import s from "./Chat.module.css"
import ChatThread from './ChatThread';

const Chat = () => {

  const [thread] = useState(THREAD);


  return (
    <div>
        <ChatThread thread={thread} />
    </div>
  )
}

export default Chat
