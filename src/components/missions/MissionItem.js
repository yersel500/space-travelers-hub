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
      <td className="mission-name">{mission}</td>
      <td>{description}</td>
      <td className="member-mission">
        { reserved ? (<span className="active-member"> Active Member</span>) : (<span className="not-member"> NOT A MEMBER</span>)}
      </td>
      <td className="join-mission">
        <button
          type="button"
          onClick={handleJoin}
          className={id}
          style={{
            color: reserved ? 'red' : 'black',
            border: reserved ? '2px solid red' : '2px solid black',
            borderRadius: '0.2rem',
            fontWeight: '600',
            background: 'transparent',
            padding: '0.15rem',
            display: 'block',
            margin: 'auto',
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
