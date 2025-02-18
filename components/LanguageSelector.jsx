import React from 'react'

const LanguageSelector = ({language, setLanguage, translateText, detectedLanguage, onDetect}) => {
    
  return (
    <div>
      <div>
        {detectedLanguage && <p>Detected Language: {detectedLanguage}</p>}
        <button onClick={onDetect}>Detect Language</button>
      </div>
      <div>
        <select name="languages" value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="pt">Portuguese</option>
          <option value="es">Spanish</option>
          <option value="ru">Russian</option>
          <option value="tr">Turkish</option>
        </select>

        <button onClick={translateText}>Translate</button>
      </div>
    </div>
  )
}

export default LanguageSelector