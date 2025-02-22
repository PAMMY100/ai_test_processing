'use client'
// import About from "@/components/About";
import ChatInput from "@/components/Chatinput";
import TextProcessor from "@/components/TextProcessor";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useRef, useState } from "react";
import { detectLanguage, summarizeText, translateText } from "@/utils/api";
import Header from "@/components/Header";

const Page = () => {
  // const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false)
  const messageListRef = useRef(null);

  // const toggleView = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = async (text) => {
    const detectedLanguage = await detectLanguage(text);

    const newMessages = {
      id: messages.length + 1,
      text,
      detectedLanguage,
      translatedText: '',
      summary: '',
  
    }

    setMessages([...messages, newMessages])
  }

  const handleTranslate = async (id, targetLang) => {
    const foundMessage = messages.find(msg => msg.id === id);
    const translatedText = await translateText(foundMessage.text, targetLang);
    if (translatedText) {
      setMessages(messages.map(msg => msg.id === id ? { ...msg, translatedText } : msg));
    }
  }

  const handleSummarize = async (id) => {
    setLoading(true)
    const foundMessage = messages.find(msg => msg.id === id);
    const summary = await summarizeText(foundMessage.text);
    if (summary) {
      setMessages(messages.map(msg => msg.id === id ? { ...msg, text:summary, summary} : msg));
    }
    setLoading(false)
  }

  return (
    <div className="relative flex flex-col h-full w-full p-1 gap-4 borrder border-slate-500">
      <Header />
      <ToastContainer autoClose={2000} hideProgressBar />
      <TextProcessor messages={messages} onTranslate={handleTranslate} onSummarize={handleSummarize} loading={loading} messageListRef={messageListRef}/>
      <ChatInput onSendMessage={handleSendMessage}/>
      
    </div>
  );
};

export default Page;
