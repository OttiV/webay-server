export default (state = null, action = []) => {
  
  switch (action.type) {
    case "ADS_FETCHED":
      return action.ads;

    // case "EVENT_CREATE_SUCCESS":
    //   return [...state, action.event];

    // case "EVENT_DELETE_SUCCESS":
    //   const array = state.filter(event => {
    //     return event.id !== action.payload;
    //   });
    //   return array;

    // case "EVENT_EDIT":
    //   const array1 = state.map(event => {
    //     if (event.id === action.id) {
    //       return action.payload;
    //     } else return event;
    //   });
    //   console.log(array1);
    //   return array1;

    default:
      return state;
  }
};
