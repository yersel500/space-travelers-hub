import { useSelector } from 'react-redux';
import MissionItemProfile from './MissionItemProfile';

const Profile = () => {
  const myState = useSelector((state) => state.missionReducer);
  const ReservedMissions = myState.filter((element) => element.reserved === true);
  const rockets = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved === true);

  return (
    <div className="profile-container">
      <div className="rockets-profile-container">
        <h2 className="rockets-profile-title">My Missions</h2>
        <div className="rockets-ul">
          {ReservedMissions.map((element) => (
            <MissionItemProfile
              key={element.MissionId}
              name={element.MissionName}
            />
          ))}
        </div>
      </div>
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
