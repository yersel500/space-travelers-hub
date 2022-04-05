// Actions
// const JOIN = 'missions/missionReducer/JOIN';
// const LEAVE = 'missions/missionReducer/LEAVE';
const FETCH_MISSION = 'mission/missionReducer/FETCH_MISSION';

const missionUrl = 'https://api.spacexdata.com/v3/missions';

export const FetchData = () => async () => {
  const response = await fetch(missionUrl);
  const data = await response.json();
  console.log(data);
  // dispatch({
  //   type: FETCH_MISSION,
  //   payload: mymission
  // });
};

export const missionReducer = (state = [], action = {}) => {
  switch (action.type) {
    // case JOIN:
    //   const newState = state.map((element) => {
    //     if (element.mission_id !== action.payload) {
    //       return element;
    //     }
    //     return { ...element, reserved: true };
    //   });
    //   return newState;
    case FETCH_MISSION:
      return [...state];
  }
};
