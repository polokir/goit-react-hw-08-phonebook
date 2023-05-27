import Header from 'components/Header/Header';
import { Outlet } from 'react-router';

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
