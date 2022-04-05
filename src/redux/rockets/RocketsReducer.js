const GET_ROCKETS = 'rockets/RocketsReducer/GET_ROCKETS';

const rocketsURL = 'https://api.spacexdata.com/v3/rockets';

const initialState = [];

export const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export const rocketsData = (payload) => ({
  type: GET_ROCKETS,
  payload,
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
    });
  });
  return rockets;
};
