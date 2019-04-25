import { AD_FETCHED } from "../actions/ads";

export default (state = [], action = []) => {
  console.log("ACTION:", action.ad);
  switch (action.type) {
    case AD_FETCHED:
      return action.ad;

    // case EVENT_UPDATE_SUCCESS:
    //   if (state.id === action.event.id) {
    //     return action.event;
    //   }

    //   return state;

    default:
      return state;
  }
};
