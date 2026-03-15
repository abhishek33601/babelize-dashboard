import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const today = new Date().toLocaleDateString();

  return (
    <div className="header">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        
        <h3>{t("header.welcomeBackAdmin")}</h3>

        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <p>{t("header.lastLogin")}{today}</p>
          <LanguageSwitcher />
        </div>

      </div>
    </div>
  );
};

export default Header;