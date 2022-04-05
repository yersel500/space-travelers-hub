// import { useSelector } from "react-redux";

const MissionItem = ({ mission, description }) =>
  // const myState = useSelector(state => state);
  // console.log(myState);
  (
    <tr>
      <td>{mission}</td>
      <td>{description}</td>
      <td>Status</td>
      <td>Join</td>
    </tr>
  );

export default MissionItem;
