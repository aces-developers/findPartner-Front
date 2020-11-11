import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import history from "../../history/history";

const projects = createSlice({
  name: "projects",
  initialState: {
    projectData: null,
    projects: [],
    searchResult: [],
    newproject: [],
    projectDetails: [],
    Modal: false,
    deleteModal: false,
    sessionToken: "",
    check: false,
    proposalData: null,
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
      console.log("setModal =====>", action);
      state.Modal = action.payload;
    },
    setSession(state, action) {
      console.log("setSession =====>", action);
      state.sessionToken = action.payload;
    },
    /*setAllAppliedID(state, action) {
        console.log("AllAppliedID action  =====>", action);
        state.AllAppliedID = action.payload;
        //state.AllAppliedID = action.payload.map(proj=>(proj.projectId));
      },*/

    setDetails(state, action) {
      console.log("setDetails =====>", action);
      state.projectDetails = action.payload;
    },
    setDeleteModal(state, action) {
      console.log("setdeleteModal=====>", action);
      state.deleteModal = action.payload;
    },
    setcheck(state, action) {
      console.log("setcheck=====>", action);
      state.check = action.payload;
    },
    setProposalData(state, action) {
      console.log("setProposalData =====>", action);
      state.proposalData = action.payload;
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
export const handlepost = (body) => async (dispatch, getState) => {
  let token = getState().users.account.token;
  console.log("bod ----->", body);
  console.log("token ----->", token);

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const bodyParameters = body;

  axios
    .post(
      "https://as-findpartner.herokuapp.com/newproject",
      bodyParameters,
      config
    )
    .then((res) => {
      // handle success
      if (res.data) {
        dispatch(setModal(true));
      }
      console.log(" handleSearch success-->", res.data);
      dispatch(setNewProject(res.data));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const handleEdit = (bod, token, id) => async (dispatch, getState) => {
  console.log("data ---->", bod);
  const config = {
    // headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhpZGF5YS1TeWFtIiwiaWF0IjoxNjA0Njg5NTgzfQ.08VecrnTBaSvjG-UX5eC8QxYSMaUW64YL6-YkISQ3sY` }
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = bod;
  console.log("bod", bodyParameters);
  console.log("token", token);
  console.log("id", id);
  axios
    .put(
      `https://as-findpartner.herokuapp.com/project/${id}`,
      bodyParameters,
      config
    )
    .then((res) => {
      // handle success
      console.log(" handleEdit success-->", res.data);
      dispatch(setNewProject(res.data));
      history.push(`/detalis/${id}`);
    })
    .catch((error) => {
      // handle error
      console.log(error.message);
    });
};

/*export const getAllApplied = (props) => async (dispatch, getState) => {

    const config = {
       headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhpZGF5YS1TeWFtIiwiaWF0IjoxNjA0OTMxNjg3fQ.EClvcDWAtK3Ap4XcR2lwlA5-zpqEjlTLeQKJhKoB_tI` }
    //  headers: { Authorization: `Bearer ${token}` }
  };
     axios.get(`https://as-findpartner.herokuapp.com/allapply`, config)
      .then((res) => {
        console.log(" >>>>>>>>>>>>getAllApplyed success-->", res.data);
        dispatch(setAllAppliedID(res.data))
    })
      .catch((error) => {
        console.log(error);
      });
  };*/

//allapply
//export const { setAllAppliedID} = projects.actions;

export const apply = (id, propsal) => async (dispatch, getState) => {
  console.log("propsal ------->", propsal);
  console.log("_id ------->", id);
  // const userid = getState.users.account.userid;
  const config = {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhpZGF5YS1TeWFtIiwiaWF0IjoxNjA0ODU2MTA2fQ.7BRVrqCZeWO1rpWUQ1gO7CfgHFWz5YujfnUWL9RCw7Y`,
    },
  };

  //const bodyParameters = bod

  axios
    .post(`https://as-findpartner.herokuapp.com/apply/${id}`, propsal, config)
    .then((res) => {
      // handle success
      // if (res.data) { dispatch(setModal(true)) }
      console.log(" apply success-->", res.data);
      //dispatch(setNewProject(res.data));
      history.push("/");
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
export const getproject = (id) => async (dispatch, getState) => {
  console.log("getproject ---> ", id);
  axios
    .get(`https://as-findpartner.herokuapp.com/project/${id}`)
    .then((res) => {
      // handle success
      // if (res.data) { dispatch(setModal(true)) }
      console.log(" getproject success-->", res.data);
      dispatch(setprojectData(res.data[0]));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const editproject = (bod, id, token) => async (dispatch, getState) => {
  const config = {
    // headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhpZGF5YS1TeWFtIiwiaWF0IjoxNjA0Njg5NTgzfQ.08VecrnTBaSvjG-UX5eC8QxYSMaUW64YL6-YkISQ3sY` }
    headers: { Authorization: `Bearer ${token}` },
  };

  const bodyParameters = bod;

  console.log("token", token);

  axios
    .put(
      `https://as-findpartner.herokuapp.com/project/${id}`,
      bodyParameters,
      config
    )
    .then((res) => {
      // handle success
      console.log(" handleopen success-->", res.data);
      dispatch(setprojectData(res.data));
      dispatch(setModal(false));

      // dispatch(setcheck(res.data.isopen))
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};
export const deleteProject = (body, token) => async (dispatch, getState) => {
  let config = {
    // headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhpZGF5YS1TeWFtIiwiaWF0IjoxNjA0Njg5NTgzfQ.08VecrnTBaSvjG-UX5eC8QxYSMaUW64YL6-YkISQ3sY` }
    headers: { Authorization: `Bearer ${token}` },
  };
  console.log("DELETE --->", token);
  console.log("del bod", body);

  axios
    .delete(
      `https://as-findpartner.herokuapp.com/project/${body._id}?oid=${body._ownerId}`,
      config
    )
    .then((res) => {
      // handle success

      console.log(" delproject success-->", res);
      history.push("/");
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const getProposal = (projectId) => async (dispatch, getState) => {
  let token = JSON.parse(localStorage.getItem("token"));
  console.log("token -----....", token);
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios
    .get(`https://as-findpartner.herokuapp.com/proposal/${projectId}`, config)
    .then((res) => {
      // handle success
      // if (res.data) { dispatch(setModal(true)) }
      console.log(" getProposal success-->", res.data);
      dispatch(setProposalData(res.data));
    })
    .catch((error) => {
      // handle error
      console.log(error.message);
    });
};
export const {
  setprojectData,
  setProposalData,
  setProjects,
  setSearchResult,
  setNewProject,
  setModal,
  setSession,
  setDeleteModal,
  setcheck,
  setAllAppliedID,
} = projects.actions;
export default projects.reducer;
