
const Chatinput = ({text, setText}) => { 

    const handleSend = () => {
        if(text.trim() === "") return;
        onsuspend(text);
        setText("")
    }

  return (
    <div className='flex flex-col justify-center'>
        <textarea 
            className='h-[100px] w-60 border-blue-500 border-2'
            name="text" 
            placeholder='Enter your text here' 
            value={text}
            onChange={(e) => setText(e.target.value)}
            />
        <button onClick={handleSend} className='bg-blue-500 text-white h-10 w-36'>Send</button>
    </div>
  )
}

export default Chatinput