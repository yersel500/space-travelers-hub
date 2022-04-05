// Actions
const JOIN = 'missions/missionReducer/JOIN';
// const LEAVE = 'missions/missionReducer/LEAVE';
const FETCH_MISSION = 'mission/missionReducer/FETCH_MISSION';

const missionUrl = 'https://api.spacexdata.com/v3/missions';

export const FetchData = () => async (dispatch) => {
  const response = await fetch(missionUrl);
  const data = await response.json();
  console.log(data);
  const data2 = [];
  data.forEach((element) => {
    data2.push({
      MissionName: element.mission_name,
      MissionId: element.mission_id,
      description: element.description,
      reserved: false,
    });
  });
  dispatch({
    type: FETCH_MISSION,
    payload: data2,
  });
};

export const JoinMission = (id) => ({
  type: JOIN,
  payload: id,
});

export const missionReducer = (state = [], action = {}) => {
  switch (action.type) {
    case JOIN: {
      const newState = state.map((element) => {
        if (element.mission_id !== action.payload) {
          return element;
        }
        if (element.reserved === true) {
          return ({ ...element, reserved: false });
        }
        return ({ ...element, reserved: true });
      });
      return newState;
    }
    case FETCH_MISSION:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
