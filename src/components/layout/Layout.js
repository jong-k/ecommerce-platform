const Layout = ({ children }) => {
  return (
    <main className="container">
      <h2>Issue Tracker</h2>
      {children}
    </main>
  );
};

export default Layout;
