import { AD_FETCHED, AD_UPDATE_SUCCESS } from "../actions/ads";

export default (state = [], action = []) => {
  console.log("ACTION:", action);
  switch (action.type) {
    case AD_FETCHED:
    return action.ad;
    
    case AD_UPDATE_SUCCESS:
      if (state.id === action.ad.id) {
        return action.ad;
      }

      return state;

    default:
      return state;
  }
};
