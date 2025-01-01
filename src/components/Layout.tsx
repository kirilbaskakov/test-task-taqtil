import { Outlet } from 'react-router-dom';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="max-w-7xl px-4 mx-auto py-6">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
