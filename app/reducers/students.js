import axios from "axios";

//action types
const GET_STUDENTS = "GET_STUDENTS";
const GET_STUDENT = "GET_STUDENT";

//action creators
export function getStudents(students) {
  return { type: GET_STUDENTS, students };
}

export function getStudent(student) {
  return { type: GET_STUDENT, student };
}

//thunk creators

export function fetchStudents() {
  return function thunk(dispatch) {
    return axios
      .get("/api/students")
      .then(res => res.data)
      .then(students => dispatch(getStudents(students)))
      .catch(err => console.error(err));
  };
}

//reducer

export default function students(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;

    case GET_STUDENT:
      return [...state.students, action.student];

    default:
      return state;
  }
}
