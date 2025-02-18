'use client'
import React, { useEffect, useState } from 'react'

const ChatOutput = ({text}) => {
  const [language, setLanguage] = useState("en");
  const [translatedText, setTranslatedText] = useState("");
  const [detectedLanguage, setDetectedLanguage] = useState("");
  const [summary, setSummary] = useState("")

  useEffect(() => {
    if(text.trim() !== "") {
      detectLanguage()
    }
  }, [text])


  async function detectLanguage () {
    try {
      const detector = await self.ai.languageDetector.create()
      const result = await detector.detect(text)
      
      const highestConfidence = result.reduce((prev, current) => {
        return prev.confidence > current.confidence ? prev : current;
      });
      console.log(highestConfidence);
      setDetectedLanguage(highestConfidence.detectedLanguage);

    } catch (error) {
      console.error("Language detection failed: ", error)
    }
  }

  async function translateText() {
    try {
        const translator = await self.ai.translator.create({
            sourceLanguage: detectedLanguage || "en",
            targetLanguage: language 
        })

        const result = await translator.translate(text);
        console.log(result)
        setTranslatedText(result)

        } catch (error) {
            console.error("Translation failed: ", error)
        }
    }

    async function summarizeText() {
      try {
        const summarizer = await self.ai.summarizer.create();
        const result = await summarizer.summarize(text);
        console.log(result)
        setSummary(result)
      } catch(error) {
        console.error("Summarize failed!: ", error)
      }
    }

    let list;

    if (summary) {
      list = summary.split('*')
    }
    
  return (
    <div className='mt-5 w-[600px] h-full border-2 border-blue-100 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 flex flex-col gap-4 p-10 text-white text-xl rounded-xl md:w-[95%] md:text-2xl'>
      <h1 className="text-3xl font-bold mb-4 md:text-4xl bg-gradient-to-r from-blue-100 via-blue-300 to-blue-700 bg-clip-text text-transparent">Translate Text Here!</h1>
      <div>
        <p className='mb-4 font-semibold'>Text: <span className='text-blue-300'>{text}</span></p>
        {detectLanguage && <p className='font-bold mb-8'>Dectected Language: <span className='text-blue-300'>{detectedLanguage}</span></p>}
      </div>
      <div>
        <select className='text-blue-800  w-[350px] h-16 rounded mr-3 border-none focus:border-none outline-none p-3 md:w-[95%] md:mb-3' name="languages" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="pt">Portuguese</option>
          <option value="es">Spanish</option>
          <option value="ru">Russian</option>
          <option value="tr">Turkish</option>
        </select>

        <button className='h-16 w-[150px] bg-white text-blue-800 font-bold border-slate-500 rounded-lg hover:bg-slate-600 hover:text-white transition duration-700 ease-in-out md:w-[300px]' onClick={translateText}>Translate</button>
      </div>
      <div>
    </div>
      <p className='font-bold mt-6'>Translation: <span className='text-blue-300'>{translatedText}</span></p>
      <div>
        {text.length > 150 && <button className='mb-3 h-16 w-[150px] bg-white text-blue-800 font-bold border-slate-500 rounded-lg hover:bg-slate-600 hover:text-white transition duration-700 ease-in-out md:w-[300px]' onClick={summarizeText}>Summarize</button>}
        {summary && <p className='mb-4 font-semibold'>Summary</p>}
        {summary && list.map((list, index) => (
          <p key={index} className='text-blue-300 mb-1'>{list}</p>
        ))}
      </div>
    </div>
  )
}

export default ChatOutput