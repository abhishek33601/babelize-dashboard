const Header = () => {
  const today = new Date().toLocaleDateString();

  return (
    <div className="header">
      <h3>Welcome back, Admin</h3>
      <p>Last login: {today}</p>
    </div>
  );
};

export default Header;