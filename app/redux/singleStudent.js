const SELECT_STUDENT = 'SELECT_STUDENT';

export const selectStudent = (student) => ({
    type: SELECT_STUDENT,
    student
});

export const fetchSingleStudent = (id) => async (dispatch, getState, { axios }) => {
    try {
        const { data } = await axios.get(`/api/students/${id}`);
        dispatch(selectStudent(data));
    }
    catch (err) {
        console.log('Could not get student from database :-(');
        console.error(err.stack);
    }
};

export default function singleStudentReducer(singleStudent = {}, action) {
    switch (action.type) {
        case SELECT_STUDENT:
            return action.student;
        default:
            return singleStudent;
    }
}
