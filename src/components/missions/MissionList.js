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
          key={element.MissionId}
          id={element.MissionId}
          mission={element.MissionName}
          description={element.description}
        />
      ))}
      <MissionItem />
    </table>
  );
};

export default MissionList;
