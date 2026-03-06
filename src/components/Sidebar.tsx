import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Babelize Admin</h2>
      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/users">Users</Link>
      </nav>
    </div>
  );
};

export default Sidebar;