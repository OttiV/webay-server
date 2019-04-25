import {
  ADS_FETCHED,
  AD_UPDATE_SUCCESS
} from "../actions/ads";

export default (state = null, action = []) => {
  console.log("ACTIONS:", action);
  switch (action.type) {
    case ADS_FETCHED:
      return action.ads;

    case AD_UPDATE_SUCCESS:
      const newState = state.map(ad => {
        if (ad.id === action.ad.id) {
          return action.ad;
        }

        return ad;
      });

      console.log("newState test:", newState);
      return newState;

    default:
      return state;
  }
};
