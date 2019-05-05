import { ADS_FETCHED, AD_UPDATE_SUCCESS } from "../actions/ads";

export default (state = [], action = []) => {
  console.log("ACTIONS:", action);
  switch (action.type) {
    case ADS_FETCHED:
      return action.ads;

    case AD_UPDATE_SUCCESS:
      return action.ad;

    default:
      return state;
  }
};
