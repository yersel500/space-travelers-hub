import PropTypes from 'prop-types';

const MissionItemProfile = ({ name }) => (
  <div>
    <div>{name}</div>
  </div>
);

MissionItemProfile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MissionItemProfile;
