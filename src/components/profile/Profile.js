import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile-container">
      <div className="rockets-profile-container">
        <h2 className="rockets-profile-title">My Rockets</h2>
        <ul className="rockets-ul">
          {reservedRockets.map((rocket) => <li className="rockets-li" key={rocket.id}>{rocket.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
