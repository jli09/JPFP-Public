const SELECT_CAMPUS = 'SELECT_CAMPUS';

export const selectCampus = (campus) => ({
    type: SELECT_CAMPUS,
    campus
});

export const fetchSingleCampus = (id) => async (dispatch, getState, { axios }) => {
    try {
        const { data } = await axios.get(`/api/campuses/${id}`);
        dispatch(selectCampus(data));
    }
    catch (err) {
        console.log('Could not get campus from database :-(');
        console.error(err.stack);
    }
};

export default function singleCampusReducer(singleCampus = {}, action) {
    switch (action.type) {
        case SELECT_CAMPUS:
            return action.campus;
        default:
            return singleCampus;
    }
}
