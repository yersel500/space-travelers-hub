import PropTypes from 'prop-types';

const Rocket = ({
  id, image, name, description,
}) => (
  <div id={id}>
    <img src={image} alt="Rocket" />
    <h2>{name}</h2>
    <p>{description}</p>
    <button type="button">Reserve Rocket</button>
  </div>
);

Rocket.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Rocket;
