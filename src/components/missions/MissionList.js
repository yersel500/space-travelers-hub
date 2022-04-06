// import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { FetchData } from '../../redux/missions/MissionReducer';
import MissionItem from './MissionItem';

const MissionList = () => {
  // const dispatch = useDispatch();
  const myState = useSelector((state) => state.missionReducer);
  // useEffect(() => {
  //   if (myState.lenght === 0) {
  //     dispatch(FetchData());
  //   }
  // }, []);

  return (
    <table>
      <tr>
        <th>Mission</th>
        <th>Description</th>
        <th>Status</th>
        <th>Join</th>
      </tr>
      {myState.map((element) => (
        <MissionItem
          key={element.MissionId}
          id={element.MissionId}
          mission={element.MissionName}
          description={element.description}
          reserved={element.reserved}
        />
      ))}
      <MissionItem />
    </table>
  );
};

export default MissionList;
