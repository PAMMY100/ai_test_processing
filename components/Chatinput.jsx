'use client'
import send from '@/public/send.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const ChatInput = ({ onSendMessage }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim() !== '') {
      onSendMessage(text)
      setText('')
    }
    
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ y: '100vh', opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 15 }}
      className='absolute -bottom-1 flex gap-1 md:gap-4 justify-between align-middle md:left-[9%] w-[100%] h-[20%] p-5 md:w-[80%] bg-fontFamily-poppins-1'
    >
      <textarea
        className='w-[86%] h-[80%] md:h-full md:w-[90%] border-slate-600 border-4 text-xl text-slate-500 md:text-2xl p-4 outline-none rounded-2xl'
        placeholder='Enter your text....'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {error && <p className='ml-20 md:m-0 text-xl text-red-600 font-bold'>{error}</p>}
      <button
        type='submit'
        className='bg-blue-500 text-white h-14 w-[100px] text-2xl rounded-2xl hover:scale-[1.2] transition duration-700 ease-in-out ml-0 md:ml-5 md:w-[15%] md:text-3xl flex items-center justify-center gap-2'
      >
        <Image src={send} alt='Send Icon' width={24} height={24} />
      </button>
    </motion.form>
  );
};

export default ChatInput;
