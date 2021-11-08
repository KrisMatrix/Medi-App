import './TopNav.css';

function TopNav(props) {

  return (
    <nav className="topnav">
      <ul>
        <li onClick={() => props.onChange('home') }>Home</li>
        <li onClick={() => props.onChange('meditate') }>Meditate</li>
        <li onClick={() => props.onChange('contact-us') }>Contact</li>
      </ul>
    </nav>
  );
}

export default TopNav;
