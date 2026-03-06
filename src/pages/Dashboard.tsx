import { getStats } from "../api/fakeApi";
import StatsCard from "../components/StatsCard";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();
  const stats = getStats();

  return (
    <div className="content">
      <h2>{t("analytics")}</h2>

      <div className="stats">
        <StatsCard title={t("revenue")} value={stats.revenue} />
        <StatsCard title={t("users")} value={stats.users} />
        <StatsCard title={t("conversion")} value={stats.conversion} />
      </div>
    </div>
  );
};

export default Dashboard;