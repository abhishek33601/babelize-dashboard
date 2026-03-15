import { useTranslation } from "react-i18next";const Header = () => {const { t } = useTranslation();

  const today = new Date().toLocaleDateString();

  return (
    <div className="header">
      <h3>{t("header.welcomeBackAdmin")}</h3>
      <p>{t("header.lastLogin")}{today}</p>
    </div>);

};

export default Header;