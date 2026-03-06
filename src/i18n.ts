import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome back, Admin",
          analytics: "Analytics Overview",
          revenue: "Total Revenue",
          users: "Active Users",
          conversion: "Conversion Rate"
        }
      },
      hi: {
        translation: {
          welcome: "स्वागत है, एडमिन",
          analytics: "एनालिटिक्स अवलोकन",
          revenue: "कुल राजस्व",
          users: "सक्रिय उपयोगकर्ता",
          conversion: "रूपांतरण दर"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;