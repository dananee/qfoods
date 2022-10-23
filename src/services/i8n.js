import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translateEn from '../local/en.json'
import translateAr from '../local/ar.json'
import translateFr from '../local/fr.json'
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
    en: {
        translation:
            translateEn

    }, ar: {
        translation:
            translateAr

    },
    fr: {
        translation:
            translateFr

    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        returnObjects: true,
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        react:{
            useSuspense:false
        }
    });

export default i18n;