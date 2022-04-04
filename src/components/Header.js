import logo from '../assets/planet.png';

const Header = () => (
  <header>
    <nav>
      <div className="title-container">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="header-title">Space Travelers&apos; Hub</h1>
      </div>
      <ul className="list-container">
        <li className="rockets-nav">Rockets</li>
        <li>Missions</li>
        <li className="my-profile-nav">My Profile</li>
      </ul>
    </nav>
    <hr />
  </header>
);

export default Header;
