import ChatOutput from "./ChatOutput";
import Header from "./Header";
import { motion } from "framer-motion";

const TextProcessor = ({messages, onTranslate, onSummarize, loading, messageListRef}) => {

  return (
    <motion.div 
        initial={{ y: '0vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, damping: 15 }}
        className="reltive mx-auto px-5 h-[70%] w-[98%] rounded-lg md:w-[90%] overflow-auto bg-gradient-to-r from-slate-300 via-slate-500 to-slate-900">
        <Header />
        <div className="mt-20">
            {messages.map((message) => (
                <ChatOutput
                key={message.id}
                message={message}
                onTranslate={onTranslate}
                onSummarize={onSummarize}
                loading={loading}
                messageListRef={messageListRef}
                />
            ))}
        </div>
    </motion.div>
  );
};

export default TextProcessor;
