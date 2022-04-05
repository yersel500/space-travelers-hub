// import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

const MissionItem = ({ id, mission, description }) => {
  // const myState = useSelector(state => state);
  // console.log(myState);
  const handleJoin = (e) => {
    const myId = e.target.className;
    console.log(myId);
  };
  return (
    <tr>
      <td>{mission}</td>
      <td>{description}</td>
      <td>NOT A MEMBER</td>
      <td>
        <button
          type="button"
          onClick={handleJoin}
          className={id}
        >
          Join Mission
        </button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItem;
