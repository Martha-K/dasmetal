import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en';
import uk from './uk';
import ru from './ru';

const resources = {
  en: {
    translation: en,
  },
  uk: {
    translation: uk,
  },
  ru: {
    translation: ru,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uk",
  fallbackLng: "uk",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
