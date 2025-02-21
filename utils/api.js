import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const detectLanguage = async (text) => {
  try {
    const detector = await self.ai.languageDetector.create();
    const result = await detector.detect(text);
    const highestConfidence = result.reduce((prev, current) => (prev.confidence > current.confidence ? prev : current));
    return highestConfidence.detectedLanguage;
  } catch (error) {
    console.error('Language detection failed:', error);
    toast.error('Failed to detect language.');
    return null;
  }
};

export const translateText = async (text, targetLang) => {
  try {
    const detectedLanguage = await detectLanguage(text);
    if (!detectedLanguage) {
      throw new Error('Language detection failed');
    }
    const translator = await self.ai.translator.create({ sourceLanguage: detectedLanguage, targetLanguage: targetLang });
    const result = await translator.translate(text);
    return result;
  } catch (error) {
    console.error('Translation failed:', error);
    toast.error(error.message);
    return null;
  }
};

export const summarizeText = async (text) => {
  try {
    const summarizer = await self.ai.summarizer.create();
    const result = await summarizer.summarize(text);
    return result.split(' ').slice(1, 11).join(' ') + '...';
  } catch (error) {
    console.error('Summarization failed:', error);
    toast.error('Summarization failed.');
    return null;
  }
};
