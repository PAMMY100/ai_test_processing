'use client'
import Chatinput from '@/components/Chatinput'
import ChatOutput from '@/components/ChatOutput';
import React, { useState } from 'react'

const page = () => {
  const [text, setText] = useState('');
  const [message, setMessage] = useState('')

  const handleSend = () => {
    if(text.trim() === "") return;
    setMessage(text);
    setText("")
}
  

  return (
    <div className='bg-white flex flex-col justify-center items-center align-middle h-full border-2 w-[650px] p-2 border-slate-700 rounded-2xl md:w-[850px]'>
      <ChatOutput 
        text={message} 
        />
      <Chatinput text={text} setText={setText} onSend={handleSend}/>
    </div>
  )
}

export default page