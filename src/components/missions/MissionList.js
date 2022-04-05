import MissionItem from './MissionItem';

const MissionList = () => (
  <table>
    <tr>
      <th>Mission</th>
      <th>Description</th>
      <th>Status</th>
      <th>Join</th>
    </tr>
    <MissionItem />
  </table>
);

export default MissionList;
