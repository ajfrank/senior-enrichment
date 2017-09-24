import axios from "axios";

//action types
const GET_STUDENTS = "GET_STUDENTS";
const REMOVE_STUDENT = "REMOVE_STUDENT";

//action creators
export function getStudents(students) {
  return { type: GET_STUDENTS, students };
}

export function removeStudent(id) {
  return { type: REMOVE_STUDENT, id };
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

export function deleteStudent(id) {
  return function thunk(dispatch) {
    axios
      .delete(`/api/student/${id}`)
      .then(() => {
        dispatch(removeStudent(id));
      })
      .catch(err => console.error(err));
  };
}

//reducer

export default function students(students = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;

    case REMOVE_STUDENT:
      return students.filter(student => {
        return student.id * 1 !== action.id * 1;
      });

    default:
      return students;
  }
}
