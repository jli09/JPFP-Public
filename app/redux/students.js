const SET_STUDENTS = 'SET_STUDENTS';

export const setStudents = (students) => ({
  type: SET_STUDENTS,
  students
 });

export const fetchStudents = () => async (dispatch, getState, {axios}) => {
  try {
    const { data } = await axios.get('/api/students/');
    dispatch(setStudents(data));
  }
  catch (err) {
    console.log('Could not get students from database :-(');
    console.error(err.stack);
  }
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function studentsReducer(students = [], action) {
  switch (action.type) {
    case SET_STUDENTS:
      return action.students;
    default:
      return students;
  }
}
