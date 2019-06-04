import request from "superagent";

export const ADS_FETCHED = "ADS_FETCHED";
// export const AD_CREATE_SUCCESS = "AD_CREATE_SUCCESS";
export const AD_FETCHED = "AD_FETCHED";
// export const AD_DELETE_SUCCESS = "AD_DELETE_SUCCESS";
export const AD_UPDATE_SUCCESS = "AD_UPDATE_SUCCESS";

const baseUrl = "https://still-beyond-89734.herokuapp.com";

const adsFetched = ads => ({
  type: ADS_FETCHED,
  ads
});

export const loadAds = () => (dispatch, getState) => {
  console.log("test");
  // if (getState().ads) return;

  request(`${baseUrl}/ads`)
    .then(response => {
      console.log("RESPONSE:", response);
      dispatch(adsFetched(response.body.ads));
    })
    .catch(console.error);
};

export const adFetched = ad => ({
  type: AD_FETCHED,
  ad
});

export const loadAd = id => dispatch => {
  request
    .get(`${baseUrl}/ads/${id}`)
    .then(response => {
      console.log(response.body);
      dispatch(adFetched(response.body));
    })
    .catch(console.error);
};
export const adUpdateSuccess = ad => ({
  type: AD_UPDATE_SUCCESS,
  ad
});

export const updateAd = (id, formValues) => dispatch => {
  console.log(id, formValues);
  const newAd = formValues;
  newAd.id = id;

  request
    .put(`${baseUrl}/ads/${id}`)
    .send(newAd) //to send the data to the DB
    .then(() => {
      dispatch(adUpdateSuccess(newAd));
    })
    .catch(console.error);
};
