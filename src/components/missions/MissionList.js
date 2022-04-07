import { useSelector } from 'react-redux';
import MissionItem from './MissionItem';

const MissionList = () => {
  const myState = useSelector((state) => state.missionReducer);

  return (
    <table className="missions-container">
      <thead>
        <tr>
          <th
            style={
              { width: '10%' }
            }
          >
            Mission
          </th>
          <th
            style={
              { width: '60%' }
            }
          >
            Description
          </th>
          <th
            style={
              {
                width: '15%',
              }
            }
          >
            Status
          </th>
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
