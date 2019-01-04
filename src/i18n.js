import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationResources from './languages';


const languageDetector = new LanguageDetector(null, {
  order: [
    'boilerplateLocale',
    'querystring',
    'localStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],
});

languageDetector.addDetector({
  name: 'boilerplateLocale',
  lookup() {
    let lang = 'ua';
    return lang;
  },
});


i18next
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    resources: translationResources,
    fallbackLng: 'en',
    defaultNS: 'boilerplate',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
