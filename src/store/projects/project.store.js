import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const projects = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    searchResult: [],
  },
  reducers: {
    setProjects(state, action) {
      console.log("action =====>", action);
      state.projects = action.payload;
    },
    setSearchResult(state, action) {
      console.log("setSearchResults =====>", action);
      state.searchResult = action.payload;
    },
  },
});

export const loadProjects = () => async (dispatch, getState) => {
  axios
    .get("https://as-findpartner.herokuapp.com/allprojects")
    .then((res) => {
      // handle success
      console.log(" loadProjects success-->", res.data);
      dispatch(setProjects(res.data));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};


export const handleSearch = (q, search) => async (dispatch, getState) => {
  axios
    .get(
      `https://as-findpartner.herokuapp.com/allprojects?q=${q}&search=${search}`
    )
    .then((res) => {
      // handle success
      console.log(" handleSearch success-->", res.data);
      dispatch(setSearchResult(res.data));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
export const { setProjects, setSearchResult } = projects.actions;
export default projects.reducer;
