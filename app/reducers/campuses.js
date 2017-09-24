import axios from "axios";

//action types

const GET_CAMPUSES = "GET_CAMPUSES";
const REMOVE_CAMPUS = "REMOVE_CAMPUS";
const ADD_CAMPUS = "ADD_CAMPUS";

//action creators

export function getCampuses(campuses) {
  return { type: GET_CAMPUSES, campuses };
}

export function removeCampus(id) {
  return { type: REMOVE_CAMPUS, id };
}

export function addCampus(campus) {
  return { type: ADD_CAMPUS, campus };
}

//thunk creators

export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios
      .get("/api/campuses")
      .then(res => res.data)
      .then(campuses => dispatch(getCampuses(campuses)))
      .catch(err => console.error(err));
  };
}

export function deleteCampus(id) {
  return dispatch => {
    axios
      .delete(`/api/campus/${id}`)
      .then(() => dispatch(removeCampus(id)))
      .catch(err => console.error(err));
  };
}

export function createCampus(campus) {
  return dispatch => {
    axios
      .post(`/api/campus/${campus.name}`, {
        params: {
          image: campus.image
        }
      })
      .then(res => {
        dispatch(addCampus(res.data));
      })
      .catch(err => console.error(err));
  };
}

//reducer

export default function campuses(campuses = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case REMOVE_CAMPUS:
      return campuses.filter(campus => campus.id !== action.id);
    case ADD_CAMPUS:
      return [...campuses, action.campus];
    default:
      return campuses;
  }
}
