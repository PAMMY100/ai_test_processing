import React from 'react'

const About = ({onOpen}) => {

  return (
    <div className='w-[90%] h-[980px] rounded-2xl text-white border-2 border-blue-100 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 flex flex-col gap-14 justify-center items-center p-10 my-auto font-serif'>
        <h1 className='text-3xl font-bold mb-4 md:text-4xl animate-bounce bg-gradient-to-r from-blue-100 via-blue-300 to-blue-700 bg-clip-text text-transparent'>Ai Text Processing</h1>
        <section className='text-2xl flex flex-col gap-5'>
            <p>🖊️ Enter a text</p>
            <p>🔍 The Ai will automatically detect the language of the entered text</p>
            <p>🔁 Translate to the available language in the options</p>
            <p>👌Summarize text greater than 150</p>
        </section>
        <button onClick={onOpen} className='mb-3 h-16 w-[150px] items-end p-3 bg-white text-blue-800 font-bold border-slate-500 rounded-lg hover:bg-slate-600 hover:text-white transition duration-700 ease-in-out md:w-[300px] md:text-2xl'>Get Translation</button>
    </div>
  )
}

export default About