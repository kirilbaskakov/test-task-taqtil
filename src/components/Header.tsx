import { Link } from 'react-router-dom';

import links from '@/constants/links';

import BurgerMenu from './BurgerMenu';

const Header = () => {
  return (
    <header className="bg-black text-white py-4 px-6">
      <div className="flex items-center max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mr-auto">5S Control</h1>
        <nav className="text-xl">
          <ul className="gap-12 hidden sm:flex">
            {links.map(({ path, name }) => (
              <li>
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
          <div className="sm:hidden">
            <BurgerMenu />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
