import { useSelector } from 'react-redux';
import MissionItem from './MissionItem';

const MissionList = () => {
  const myState = useSelector((state) => state.missionReducer);

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th>Join</th>
        </tr>
      </thead>
      <tbody>
        {myState.map((element) => (
          <MissionItem
            key={element.MissionId}
            id={element.MissionId}
            mission={element.MissionName}
            description={element.description}
            reserved={element.reserved}
          />
        ))}
      </tbody>
    </table>
  );
};

export default MissionList;
