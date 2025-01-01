import { useState } from 'react';
import { Link } from 'react-router-dom';

import links from '@/constants/links';

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="flex flex-col items-center justify-between w-8 h-8 cursor-pointer"
        onClick={toggleMenu}
      >
        <div className={`w-full h-1 bg-white`} />
        <div className={`w-full h-1 bg-white`} />
        <div className={`w-full h-1 bg-white`} />
      </button>

      {isOpen && (
        <>
          <div
            className="absolute w-[100vw] h-[100vh] top-0 left-0 bg-black opacity-30"
            onClick={toggleMenu}
          />
          <div className={`absolute mt-4 left-0 w-full bg-white shadow-lg`}>
            <ul className="flex flex-col items-center">
              {links.map(({ path, name }) => (
                <li className="text-black hover:bg-gray-300 w-full text-center">
                  <Link
                    to={path}
                    onClick={toggleMenu}
                    className="block w-full p-4"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default BurgerMenu;
