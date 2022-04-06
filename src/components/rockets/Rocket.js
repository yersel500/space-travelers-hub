import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeReservation, reserveRocket } from '../../redux/rockets/RocketsReducer';

const Rocket = ({
  id, image, name, description, reserved,
}) => {
  const dispatch = useDispatch();

  const reserve = () => {
    dispatch(reserveRocket(id));
  };

  const cancelReservation = () => {
    dispatch(removeReservation(id));
  };

  return (
    <div className="rocket-container" id={id}>
      <img className="rocket-img" src={image} alt="Rocket" />
      <div>
        <h2 className="rocket-name">{name}</h2>
        <p className="rocket-description">
          {reserved === true && (
            <span className="rocket-span">Reserved</span>
          )}
          {description}
        </p>
        {reserved === true && (
          <button className="rocket-cancel-btn" onClick={cancelReservation} type="button">Cancel Reservation</button>
        )}
        {reserved === false && (
          <button className="rocket-reserve-btn" onClick={reserve} type="button">Reserve Rocket</button>
        )}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;
