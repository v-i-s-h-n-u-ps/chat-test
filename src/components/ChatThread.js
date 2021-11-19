import React, { useState, useRef } from 'react'

import s from "./ChatThread.module.css"

const ChatThread = (props) => {
  const { author: {avatar, name}, replies = [], text} = props.thread;

  const [open, setOpen] = useState(true);

  const ref = useRef()

  const collapse = () => {
    setOpen(false);
    navigator.userAgent.search("Firefox") === -1 && navigator.userAgent.search("MSIE") === -1
      ? ref?.current.scrollIntoViewIfNeeded({ behavior: "smooth" })
      : ref?.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className={s.chat}>
      <div className={s.commentContainer}>
        <div className={s.userDetails} ref={ref}>
          {!open && (
            <div className={s.expandIcon} onClick={() => setOpen(true)}>[+]</div>
          )}
          <img src={avatar} alt="User Avatar" />
          <p>{name}</p>
        </div>
      </div>
      {open ? (
      <div className={s.threadBlock}>
        <div className={s.threadLine} onClick={collapse}></div>
          <div className={s.text}>
            {text}
            <div className={s.replies}>
              {replies.map((reply, index) => {
                return <ChatThread key={`replies_${index}`} thread={reply} />
              })}
            </div>
          </div>
        </div>
      ) : ""}
    </div>
  )
}

export default ChatThread
