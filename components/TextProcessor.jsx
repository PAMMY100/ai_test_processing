import ChatOutput from "./ChatOutput";
import { motion } from "framer-motion";

const TextProcessor = ({messages, onTranslate, onSummarize, loading, messageListRef}) => {

  return (
    <motion.div 
        initial={{ y: '0vh', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 60, damping: 15 }}
        className="reltive mx-auto px-5 h-[80%] w-[98%] rounded-lg md:w-[90%] overflow-auto bg-gradient-to-r from-slate-500 via-slate-700 to-slate-900">
        
        <div className="mt-20">
            {messages.map((message, index) => (
                <ChatOutput
                key={message.id}
                ref={index === messages.length - 1 ? messageListRef : null}
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
