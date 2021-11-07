import './TopNav.css';

function TopNav(props) {

  return (
    <nav className="topnav">
      <ul>
        <li><a onClick={() => props.parentCallback('home') } 
          href=".">Home</a></li>
        <li><a onClick={() => props.parentCallback('meditate') } 
          href=".">Meditate</a></li>
        <li><a onClick={() => props.parentCallback('contact-us') } 
          href=".">Contact</a></li>
      </ul>
    </nav>
  );
}

export default TopNav;
