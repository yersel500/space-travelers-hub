const GET_ROCKETS = 'rockets/RocketsReducer/GET_ROCKETS';
const RESERVE_ROCKET = 'rockets/RocketsReducer/RESERVE_ROCKET';
const REMOVE_RESERVATION = 'rockets/RocketsReducer/REMOVE_RESERVATION';

const rocketsURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: true };
      });
    case REMOVE_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export const rocketsData = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

export const removeReservation = (id) => ({
  type: REMOVE_RESERVATION,
  id,
});

export const getRockets = async () => {
  const response = await fetch(rocketsURL);
  const data = await response.json();
  const rockets = [];
  data.forEach((rocket) => {
    rockets.push({
      id: rocket.id,
      name: rocket.rocket_name,
      image: rocket.flickr_images[0],
      description: rocket.description,
      reserved: false,
    });
  });
  return rockets;
};
