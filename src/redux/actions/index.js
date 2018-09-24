
const getApiResponse = payload => {
  return {
    type: "",
    payload
  };
};

export const abc = a => (dispatch, getState) => {
  fetch.then(res => {
    dispatch(getApiResponse(res));
  });
};
