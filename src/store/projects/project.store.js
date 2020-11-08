import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const projects = createSlice({
  name: "projects",
  initialState: {
    projectData:null,
    projects: [],
    searchResult: [],
    newproject:[],
    projectDetails:[],
    Modal: false,
    deleteModal:false,
    sessionToken:''
  },
  reducers: {
    setprojectData(state, action) {
      console.log("action =====>", action);
      state.projectData = action.payload;
    },
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
    setDetails(state, action) {
      console.log("setDetails =====>", action);
      state.projectDetails = action.payload;
    },setDeleteModal(state, action) {
      console.log("setdeleteModal=====>", action);
      state.deleteModal = action.payload;
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
      if (res.data) { dispatch(setModal(true)) }
      console.log(" handleSearch success-->", res.data);
      dispatch(setNewProject(res.data));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
export const handleEdit = (bod,token,id) => async (dispatch, getState) => {

  const config = {
    // headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhpZGF5YS1TeWFtIiwiaWF0IjoxNjA0Njg5NTgzfQ.08VecrnTBaSvjG-UX5eC8QxYSMaUW64YL6-YkISQ3sY` }
    headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = bod
  

  axios
    .put(
      `https://as-findpartner.herokuapp.com/newproject/${id}`,
      bodyParameters,
      config
    )
    .then((res) => {
      // handle success
      if (res.data) 
      console.log(" handleSearch success-->", res.data);
      dispatch(setNewProject(res.data));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};


export const apply = (id,propsal) => async (dispatch, getState) => {

  const config = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhpZGF5YS1TeWFtIiwiaWF0IjoxNjA0ODU2MTA2fQ.7BRVrqCZeWO1rpWUQ1gO7CfgHFWz5YujfnUWL9RCw7Y` }

  };
 
  //const bodyParameters = bod

  console.log('apply---> ', id,"---",propsal)
  axios
    .post(
      `https://as-findpartner.herokuapp.com/apply/${id}`,
      propsal,
      config
    )
    .then((res) => {
      // handle success
     // if (res.data) { dispatch(setModal(true)) }
      console.log(" apply success-->", res.data);
      //dispatch(setNewProject(res.data));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
export const getproject = (id) => async (dispatch, getState) => {

  console.log('getproject ---> ', id)
  axios
    .get(
      `https://as-findpartner.herokuapp.com/project/${id}`)
    .then((res) => {
      // handle success
     // if (res.data) { dispatch(setModal(true)) }
      console.log(" getproject success-->", res.data);
      dispatch(setprojectData(res.data));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
export const editproject = (bod,id) => async (dispatch, getState) => {
  const config = {
    headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhpZGF5YS1TeWFtIiwiaWF0IjoxNjA0Njg5NTgzfQ.08VecrnTBaSvjG-UX5eC8QxYSMaUW64YL6-YkISQ3sY` }
    // headers: { Authorization: `Bearer ${token}` }
};

const bodyParameters = bod
  

  axios
    .put(
      `https://as-findpartner.herokuapp.com/newproject`,
      bodyParameters,
      config
    )
    .then((res) => {
      // handle success
      if (res.data) { dispatch(setModal(true)) }
      console.log(" handleSearch success-->", res.data);
      dispatch(setNewProject(res.data));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
export const deleteProject = (id) => async (dispatch, getState) => {

  console.log('getproject ---> ', id)
  axios
    .put(
      `https://as-findpartner.herokuapp.com/project/${id}`)
    .then((res) => {
      // handle success
     
      console.log(" getproject success-->", res.data);
      
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
export const {setprojectData, setProjects, setSearchResult, setNewProject, setModal, setSession ,setDeleteModal } = projects.actions;
// export const { setProjects, setSearchResult,setNewProject,setModal,setSession,setDetails} = projects.actions;
export default projects.reducer;
