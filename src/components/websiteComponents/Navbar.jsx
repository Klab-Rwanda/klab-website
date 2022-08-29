import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import Logo from '../../../public/assets/website/images/logo.svg';

const MENU_LIST = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Comunity', href: '/community' },
  { text: 'Programs', href: '/programs' },
  { text: 'Events', href: '/events' },
  { text: 'Register', href: '/register', btn: true }
];
const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className='navbar-cmp'>
      <nav className='container'>
        <Link to={'/'}>
          <a>
            <img src={Logo} alt='logo' />
          </a>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? 'active' : ''} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
