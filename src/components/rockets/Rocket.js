import PropTypes from 'prop-types';

const Rocket = ({ data }) => {
  const {
    id,
    images,
    name,
    description,
  } = data;

  return (
    <div id={id}>
      <img src={images} alt="Rocket" />
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  );
};

Rocket.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
  images: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
