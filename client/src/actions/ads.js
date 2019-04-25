import request from "superagent";

export const ADS_FETCHED = "ADS_FETCHED";
// export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
// export const EVENT_FETCHED = "EVENT_FETCHED";
// export const EVENT_DELETE_SUCCESS = "EVENT_DELETE_SUCCESS";
// export const EVENT_UPDATE_SUCCESS = "EVENT_UPDATE_SUCCESS";

const baseUrl = "http://localhost:4000";

const adsFetched = ads => ({
  type: ADS_FETCHED,
  ads
});

export const loadAds = () => (dispatch, getState) => {
  console.log("test");
  if (getState().ads) return;

  request(`${baseUrl}/ads`)
    .then(response => {
      console.log("RESPONSE:", response);
      dispatch(adsFetched(response.body.ads));
    })
    .catch(console.error);
};
