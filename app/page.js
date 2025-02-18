'use client'
import Chatinput from '@/components/Chatinput'
import ChatOutput from '@/components/ChatOutput';
import LanguageSelector from '@/components/LanguageSelector';
import SummaryOutput from '@/components/SummaryOutput';
import React, { useState } from 'react'

const page = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState("en");
  const [translatedText, setTranslatedText] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState("");
  const [summary, setSummary] = useState("")


  async function translateText() {
    try {
        const translator = await self.ai.translator.create({
            sourceLanguage: detectedLanguage || "en",
            targetLanguage: language 
        })

        const result = await translator.translate(text);
        setTranslatedText(result.translation)

    } catch (error) {
        console.error("Translation failed: ", error)
    }
}

async function detectLanguage () {
  try {
    const detector = await self.ai.languageDetector.create()
    const result = await detector.detect(text)
    setDetectedLanguage(result.detectedLanguage)

  } catch (error) {
    console.error("Language detection failed: ", error)
  }
}

async function summarizeText() {
  try {
    const summarizer = await self.ai.summarizer.create();
    const result = await summarizer.summarize(text);
    setSummary(result.summary)
  } catch(error) {
    console.error("Summarize failed!: ", error)
  }
}

  return (
    <div className='flex flex-col justify-center items-center align-middle'>
      <ChatOutput text={text} translatedText={translatedText}/>
      <LanguageSelector language={language} setLanguage={setLanguage} translateText={translateText} onDetect={detectLanguage} detectedLanguage={detectLanguage}/>
      <SummaryOutput text={text} summarizeText={summarizeText} summary={summary}/>
      <Chatinput text={text} setText={setText}/>
    </div>
  )
}

export default page