import { Link } from 'react-router-dom';

const NavItem = ({ text, href, active, btn }) => {
  return (
    <Link to={href}>
      <a className={btn ? 'button' : 'nav__link'}>{text}</a>
    </Link>
  );
};

export default NavItem;
