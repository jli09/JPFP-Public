//action types
const SELECT_CAMPUS = 'SELECT_CAMPUS';
const EDIT_CAMPUS = 'EDIT_CAMPUS';

//action creators
export const selectCampus = campus => ({
  type: SELECT_CAMPUS,
  campus,
});

export const editCampus = (id, updatedCampus) => ({
  type: EDIT_CAMPUS,
  id,
  updatedCampus,
});

//thunk creators
export const fetchSingleCampus = id => async (
  dispatch,
  getState,
  { axios }
) => {
  try {
    const { data } = await axios.get(`/api/campuses/${id}`);
    dispatch(selectCampus(data));
  } catch (err) {
    console.log('Could not get campus from database :-(');
    console.error(err.stack);
  }
};

export const updateCampus = (id, updates) => async (
  dispatch,
  getState,
  { axios }
) => {
  try {
    const { data } = await axios.put(`/api/campuses/${id}`, updates);
    dispatch(editCampus(id, data));
  } catch (err) {
    console.log('Could not update campus in database :-(');
    console.error(err.stack);
  }
};

//reducer

export default function singleCampusReducer(singleCampus = {}, action) {
  switch (action.type) {
    case SELECT_CAMPUS:
      return action.campus;
      case EDIT_CAMPUS:
      return { ...singleCampus, ...action.updatedCampus };
    default:
      return singleCampus;
  }
}
