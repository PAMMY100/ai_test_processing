import React, { useState } from 'react';
import { motion } from 'framer-motion';


function ChatOutput({ message, onTranslate, onSummarize, loading, messageListRef }) {
  const [targetLang, setTargetLang] = useState('en');

  const handleTranslate = () => {
    onTranslate(message.id, targetLang);
  };

  const handleSummarize = () => {
    onSummarize(message.id);
    console.log(loading)
  };

  return (
    <motion.div
      ref={messageListRef}
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 15 }}
      className='bg-fontFamily-poppins-0 md:ml-14 mt-5 w-[98%] h-[6%] p-3 border-2 border-blue-100 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 flex flex-col gap-4 md:p-10 text-white text-lg rounded-xl md:w-[90%] md:text-2xl'>
      <p className='mb-1 md:mb-4 font-semibold'>Text: <span className='text-blue-300 font-normal'>{message.text}</span></p>
      <p className='mb-1 md:mb-4 font-semibold'>Detected Language: <span className='text-blue-300'>{message.detectedLanguage}</span></p>
      {message.translatedText && <p className='mb-1 md:mb-4 font-semibold'>Translated Text: <span className='text-blue-300 font-normal'>{message.translatedText}</span></p>}
      {message.text && (
        <div className="">
          <select className='text-blue-800 w-[200px] h-11 md:h-16 rounded mb-2 mr-3 border-none focus:border-none outline-none p-3 md:w-[25%] md:mb-3' name="languages" value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="pt">Portuguese</option>
            <option value="es">Spanish</option>
            <option value="ru">Russian</option>
            <option value="tr">Turkish</option>
            {/* Add more languages as needed */}
          </select>
          <button onClick={handleTranslate} className='mb-2 mr-10 h-10 md:h-16 w-[100px] bg-white text-blue-800 font-bold border-slate-500 rounded-lg hover:bg-slate-600 hover:text-white transition duration-700 ease-in-out md:w-[300px]'>Translate</button>
          {message.text.length > 150 &&  <button className='h-10 md:h-16 w-[150px] bg-white text-blue-800 font-bold border-slate-500 rounded-lg hover:bg-slate-600 hover:text-white transition duration-700 ease-in-out md:w-[300px]' onClick={handleSummarize}>{loading ? 'Summarizing...' : 'Summarize'}</button>}
        </div>
      )}
      {message.summary && <p className='mb-1 md:mb-3 font-semibold'>Summary: <span className='text-blue-300 font-normal'>{message.summary}</span></p>}
    </motion.div>
  );
}

export default ChatOutput;