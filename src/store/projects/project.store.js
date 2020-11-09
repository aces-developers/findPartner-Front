import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const projects = createSlice({
  name: "projects",
  initialState: {
    projects: [],
    searchResult: [],
    newproject:[],
    Modal: false,
    sessionToken:'',
    AllAppliedID:[],

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
    setNewProject(state, action) {
      console.log("setNewProject =====>", action);
      state.newproject = action.payload;
    },
    setModal(state, action) {
      console.log("setNewProject =====>", action);
      state.Modal = action.payload;
    },
    setSession(state, action) {
      console.log("setNewProject =====>", action);
      state.sessionToken = action.payload;
    },
    setAllAppliedID(state, action) {
        console.log("AllAppliedID action  =====>", action);
        state.AllAppliedID = action.payload;
        //state.AllAppliedID = action.payload.map(proj=>(proj.projectId));
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
export const loadProjectsById = () => async (dispatch, getState) => {
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
      `https://as-findpartner.herokuapp.com/searchprojects?q=${q}&search=${search}`
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
export const handlepost = (bod,token) => async (dispatch, getState) => {



  const config = {
    // headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhpZGF5YS1TeWFtIiwiaWF0IjoxNjA0Njg5NTgzfQ.08VecrnTBaSvjG-UX5eC8QxYSMaUW64YL6-YkISQ3sY` }
    headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = bod
  
  axios
    .post(
      `https://as-findpartner.herokuapp.com/newproject`,
      bodyParameters,
      config
    )
    .then((res) => {
      // handle success
      if(res.data){dispatch(setModal(true))}
      console.log(" handleSearch success-->", res.data);
      dispatch(setNewProject(res.data));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const getAllApplied = (props) => async (dispatch, getState) => {

    const config = {
       headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhpZGF5YS1TeWFtIiwiaWF0IjoxNjA0OTMxNjg3fQ.EClvcDWAtK3Ap4XcR2lwlA5-zpqEjlTLeQKJhKoB_tI` }
    //  headers: { Authorization: `Bearer ${token}` }
  };
     axios.get(`https://as-findpartner.herokuapp.com/allapply`, config)
      .then((res) => {
        console.log(" getAllApplyed success-->", res.data);
        dispatch(setAllAppliedID(res.data))
    })
      .catch((error) => {
        console.log(error);
      });
  };

//allapply
export const { setProjects, setSearchResult,setNewProject,setModal,setSession,setAllAppliedID} = projects.actions;
export default projects.reducer;
