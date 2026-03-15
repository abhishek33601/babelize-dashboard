import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Sidebar = () => {const { t } = useTranslation();
  return (
    <div className="sidebar">
      <h2>{t("sidebar.babelizeAdmin")}</h2>
      <nav>
        <Link to="/">{t("sidebar.dashboard")}</Link>
        <Link to="/users">{t("sidebar.users")}</Link>
      </nav>
    </div>);

};

export default Sidebar;