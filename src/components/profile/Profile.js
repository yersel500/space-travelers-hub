import { useSelector } from 'react-redux';
import MissionItemProfile from './MissionItemProfile';

const Profile = () => {
  const myState = useSelector((state) => state.missionReducer);
  const ReservedMissions = myState.filter((element) => element.reserved === true);
  return (
    <div>
      {ReservedMissions.map((element) => (
        <MissionItemProfile
          key={element.MissionId}
          name={element.MissionName}
        />
      ))}
    </div>
  );
};

export default Profile;
