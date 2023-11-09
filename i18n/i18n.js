import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "../src/locales/en.json";
import translationDE from "../src/locales/de.json";
import translationTR from "../src/locales/tr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    de: {
      translation: translationDE,
    },
    tr: {
      translation: translationTR,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
