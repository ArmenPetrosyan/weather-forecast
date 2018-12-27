import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './languages/en.json';
import ru from './languages/ru.json';


const languageDetector = new LanguageDetector();
languageDetector.addDetector({
  name: 'localeFromURL',
  lookup() {
    let lang;
    try {
      // lang = /(?:http|https):\/\/(?:.+?)\/([\w-]+)/g.match(window.location.href);
      lang = 'ru';
      const list = ['en', 'ru'];
      lang = list.includes(lang) ? lang : 'en';
    } catch (error) {
      lang = 'en';
    }
    return lang;
  },
});

i18next
  .use(reactI18nextModule)
  .use(languageDetector)
  .init({
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
