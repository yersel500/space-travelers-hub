import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { JoinMission } from '../../redux/missions/MissionReducer';

const MissionItem = ({
  id, mission, description, reserved,
}) => {
  const dispatch = useDispatch();
  const handleJoin = (e) => {
    const myId = e.target.className;
    dispatch(JoinMission(myId));
  };
  return (
    <tr>
      <td>{mission}</td>
      <td>{description}</td>
      <td>
        { reserved ? (<span> Active Member</span>) : (<span> NOT A MEMBER</span>)}
      </td>
      <td>
        <button
          type="button"
          onClick={handleJoin}
          className={id}
          style={{
            color: reserved ? 'red' : 'black',
            border: reserved ? '1px solid red' : '1px solid black',
          }}
        >
          { reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.string.isRequired,
};

export default MissionItem;
