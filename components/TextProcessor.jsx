'use client'
import React, { useRef, useState } from 'react';
import ChatOutput from './ChatOutput';
import Chatinput from './Chatinput';

const TextProcessor = ({onClose}) => {
    const [text, setText] = useState('');
    const [message, setMessage] = useState('')
    const [error, setError] = useState("")
    const [summary, setSummary] = useState("");

    const outputRef = useRef()
    

    const handleSend = () => {
        if(text.trim() === "") {
            setError("Enter a text to translate!");
            return;
        }
        if (text.length < 150) {
            setSummary("")
        }
        if (outputRef.current) {
            outputRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setMessage(text);
        setText("")
        setError("")
    }

  return (
    <div className='relative bg-white flex flex-col justify-center items-center align-middle h-full border-2 w-[650px] p-2 border-slate-700 rounded-2xl md:w-[850px]'>
      <button className='absolute top-2 left-2 w-[100px] text-white bg-red-600 h-[40px] rounded-md' onClick={onClose}>Exit</button>
      <ChatOutput outputRef={outputRef} text={message} input={text} summary={summary} setSummary={setSummary}/>
      <Chatinput text={text} setText={setText} onSend={handleSend} error={error}/>
    </div>
  )
}

export default TextProcessor