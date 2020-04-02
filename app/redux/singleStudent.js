//action types
const SELECT_STUDENT = 'SELECT_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';

//action creators
export const selectStudent = student => ({
  type: SELECT_STUDENT,
  student,
});

export const editStudent = (id, updatedStudent) => ({
  type: EDIT_STUDENT,
  id,
  updatedStudent,
});

//thunk creators
export const fetchSingleStudent = id => async (
  dispatch,
  getState,
  { axios }
) => {
  try {
    const { data } = await axios.get(`/api/students/${id}`);
    dispatch(selectStudent(data));
  } catch (err) {
    console.log('Could not get student from database :-(');
    console.error(err.stack);
  }
};

export const updateStudent = (id, updates) => async (
  dispatch,
  getState,
  { axios }
) => {
  try {
    const { data } = await axios.put(`/api/students/${id}`, updates);
    dispatch(editStudent(id, data));
  } catch (err) {
    console.log('Could not update student in database :-(');
    console.error(err.stack);
  }
};

//reducer

export default function singleStudentReducer(singleStudent = {}, action) {
  switch (action.type) {
    case SELECT_STUDENT:
      return action.student;
    case EDIT_STUDENT:
      return { ...singleStudent, ...action.updatedStudent };
    default:
      return singleStudent;
  }
}
