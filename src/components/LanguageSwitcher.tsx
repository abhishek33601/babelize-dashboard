import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <select 
      value={i18n.language} 
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="px-3 py-2 border rounded-md"
    >
      <option value="en">EN</option>
      <option value="hi">HI</option>
    </select>
  );
};

export default LanguageSwitcher;