
const Chatinput = ({text, setText, onSend}) => { 

    

  return (
    <div className='flex flex-col gap-4 justify-center w-[600px] h-[450px] p-3 md:w-[95%]'>
        <textarea 
            className='h-[300px] w-[90%] border-slate-600 border-4 mx-auto text-2xl p-4 outline-none rounded-2xl'
            name="text" 
            placeholder='Enter your text here' 
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        <button onClick={onSend} className='bg-blue-500 text-white h-14 w-72 text-2xl rounded-2xl hover:scale-[1.2] hover:transition hover:duration-700 hover:ease-in-out mx-auto md:w-[65%] md:text-3xl'>Send</button>
    </div>
  )
}

export default Chatinput