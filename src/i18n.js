import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationResources from './languages';


const languageDetector = new LanguageDetector(null, {
  order: [
    'weather-forecast',
    'querystring',
    'localStorage',
    'navigator',
    'htmlTag',
    'path',
    'subdomain',
  ],
});

languageDetector.addDetector({
  name: 'weather-forecast',
  lookup() {
    return 'ua';
  },
});


i18next
  .use(languageDetector)
  .use(reactI18nextModule)
  .init({
    resources: translationResources,
    fallbackLng: 'en',
    defaultNS: 'weather',
    keySeparator: '>',
    interpolation: {
      format: (value, format, lng) => {
        const lang = (lng === 'ua') ? 'uk' : lng;
        const formatter = new Intl.DateTimeFormat(lang, {
          weekday: 'long',
          month: 'long',
          day: 'numeric',
        });
        if (value instanceof Date) return formatter.format(value);
        return value;
      },
    },
  });

export default i18next;
