// import { useDispatch } from 'react-redux';
import {
  NavLink,
} from 'react-router-dom';
import logo from '../assets/planet.png';
// import { FetchData } from '../redux/missions/MissionReducer';

const Header = () => {
  const activeStyle = {
    textDecoration: 'underline',
  };
  // const dispatch = useDispatch();
  // const loadMission = () => {
  //   dispatch(FetchData());
  // };

  return (
    <header>
      <nav>
        <div className="title-container">
          <img className="logo" src={logo} alt="logo" />
          <h1 className="header-title">Space Travelers&apos; Hub</h1>
        </div>
        <ul className="list-container">
          <li>
            <NavLink
              to="/"
              className="rockets-nav"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="missions"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              // onClick={loadMission}
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              to="myprofile"
              className="my-profile-nav"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
};

export default Header;
