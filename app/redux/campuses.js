//action types
const SET_CAMPUSES = 'SET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';

//action creators
export const setCampuses = campuses => ({
  type: SET_CAMPUSES,
  campuses,
});

export const addCampus = campus => ({
  type: ADD_CAMPUS,
  campus,
});

//thunk creators
export const fetchCampuses = () => async (dispatch, getState, { axios }) => {
  try {
    const { data } = await axios.get('/api/campuses');
    dispatch(setCampuses(data));
  } catch (err) {
    console.log('Could not get campuses from database :-(');
    console.error(err.stack);
  }
};

export const createCampus = campus => async (dispatch, getState, { axios }) => {
  try {
    const { data } = await axios.post('/api/campuses/', campus);
    dispatch(addCampus(data));
  } catch (err) {
    console.log('Could not create campus in database :-(');
    console.error(err.stack);
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function campusesReducer(campuses = [], action) {
  switch (action.type) {
    case SET_CAMPUSES:
      return action.campuses;
    case ADD_CAMPUS:
      return [...campuses, action.campus];
    default:
      return campuses;
  }
}
