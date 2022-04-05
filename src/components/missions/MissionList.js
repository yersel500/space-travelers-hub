import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../../redux/missions/MissionReducer';
import MissionItem from './MissionItem';

const MissionList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchData());
  }, []);

  const myState = useSelector((state) => state);
  console.log(myState);
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
          key={element.mission_id}
          mission={element.mission_name}
          description={element.description}
        />
      ))}
      <MissionItem />
    </table>
  );
};

export default MissionList;
