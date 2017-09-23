import axios from "axios";

//action types

const GET_CAMPUSES = "GET_CAMPUSES";
const GET_CAMPUS = "GET_CAMPUS";

//action creators

export function getCampuses(campuses) {
  return { type: GET_CAMPUSES, campuses };
}

export function getCampus(campus) {
  return { type: GET_CAMPUSES, campus };
}

//thunk creators

export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios
      .get("/api/campuses")
      .then(res => res.data)
      .then(campuses => {
        dispatch(getCampuses(campuses));
      });
  };
}

//reducer

export default function campuses(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case GET_CAMPUS:
      return [...state.campuses, action.campus];
    default:
      return state;
  }
}
