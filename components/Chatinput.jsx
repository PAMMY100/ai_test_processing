import send from '@/public/send.svg'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Chatinput = ({text, setText, onSend, error}) => { 

    
  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0 }}  // Start below the screen
      animate={{ y: 0, opacity: 1 }}       // Animate to normal position
      transition={{ type: "spring", stiffness: 60, damping: 15 }} // Smooth effect
      className="flex flex-col gap-4 justify-center w-[600px] h-[450px] p-3 md:w-[95%]"
    >
      <textarea
        className="h-[300px] w-[90%] border-slate-600 border-4 mx-auto text-2xl p-4 outline-none rounded-2xl"
        name="text"
        placeholder="Enter your text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      {error && <p className="text-xl text-red-600 font-bold">{error}</p>}
      <button
        onClick={onSend}
        className="bg-blue-500 text-white h-14 w-72 text-2xl rounded-2xl hover:scale-[1.2] hover:transition hover:duration-700 hover:ease-in-out mx-auto md:w-[65%] md:text-3xl"
      >
        <Image className="mx-auto" src={send} alt="send Icon" />
      </button>
    </motion.div>
  )
}

export default Chatinput