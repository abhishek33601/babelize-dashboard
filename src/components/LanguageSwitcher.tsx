import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  return (
    <select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="px-3 py-2 border rounded-md">

      <option value="en">{t("language-switcher.en")}</option>
      <option value="hi">{t("language-switcher.hi")}</option>
    </select>);

};

export default LanguageSwitcher;