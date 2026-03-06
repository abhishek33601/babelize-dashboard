import { getStats } from "../api/fakeApi";
import StatsCard from "../components/StatsCard";

const Dashboard = () => {
  const stats = getStats();

  return (
    <div className="content">
      <h2>Analytics Overview</h2>

      <div className="stats">
        <StatsCard title="Total Revenue" value={stats.revenue} />
        <StatsCard title="Active Users" value={stats.users} />
        <StatsCard title="Conversion Rate" value={stats.conversion} />
      </div>
    </div>
  );
};

export default Dashboard;