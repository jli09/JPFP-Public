const SET_CAMPUSES = 'SET_CAMPUSES';

export const setCampuses = campuses => ({
  type: SET_CAMPUSES,
  campuses,
});

export const fetchCampuses = () => async (dispatch, getState, axios) => {
  try {
    const { data } = await axios.get('/api/campuses/');
    dispatch(setCampuses(data));
  } catch (err) {
    console.log('Could not get campuses from database :-(');
    console.error(err.stack);
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusesReducer(campuses = [], action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    default:
      return campuses;
  }
}
