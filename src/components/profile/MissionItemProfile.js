import PropTypes from 'prop-types';

const MissionItemProfile = ({ name }) => (
  <div className="rockets-li">
    {name}
  </div>
);

MissionItemProfile.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MissionItemProfile;
