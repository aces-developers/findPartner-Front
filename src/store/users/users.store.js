import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import history from "../../history/history";

const users = createSlice({
  name: "users",
  initialState: {
    users: [],
    account: {
      token: null,
      username: null,
      userid: null,
    },
    message: null,
    isValid: false,

    AllAppliedID: [],
    AppliedProjects: [],
    userPublishedProjects: [],
    countries: [],
  },
  reducers: {
    setUsers(state, action) {
      console.log("setUsers =====>", action);
      state.users = action.payload;
    },
    setAccount(state, action) {
      console.log("setAccount =====>", action);
      state.account.token = action.payload.token;
      state.account.username = action.payload.username;
      state.account.userid = action.payload.userid;
    },
    setMessage(state, action) {
      console.log("setMessage =====>", action);
      state.message = action.payload;

      console.log("setMessage =====>", state.message);
    },
    setIsValid(state, action) {
      console.log("setIsValid =====>", action);
      state.isValid = action.payload;

      console.log("setIsValid =====>", state.isValid);
    },
    setAllAppliedID(state, action) {
      console.log("AllAppliedID action  =====>", action);
      state.AllAppliedID = action.payload;
      //state.AllAppliedID = action.payload.map(proj=>(proj.projectId));
    },

    setUserPublishedProjects(state, action) {
      console.log("userPublishedProjects action =====>", action);
      state.userPublishedProjects = action.payload;
    },
    setListCountries(state, action) {
      state.countries = action.payload;
    },
    signOut(state, action) {
      state.account.token = null;
      state.account.username = null;
      state.account.userid = null;
      localStorage.clear();
      history.push("/");
    },
  },
});

export const loadUsers = () => async (dispatch, getState) => {
  console.log("loadUsers");
  axios
    .get(`https://as-findpartner.herokuapp.com/users`)
    .then((res) => {
      // handle success
      console.log(" handle success loadUsers -->", res.data);
      dispatch(setUsers(res.data));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const SignIn = (userdata) => async (dispatch, getState) => {
  console.log("userdata SignIn------->", userdata);
  axios
    .post(
      "https://as-findpartner.herokuapp.com/signin",
      {},
      {
        auth: {
          username: userdata.username,
          password: userdata.password,
        },
      }
    )
    .then((res) => {
      // handle success
      console.log(" handle SignIn success-->", res.data);
      dispatch(setAccount(res.data));
      localStorage.setItem("account", JSON.stringify(res.data));
      localStorage.setItem("token", JSON.stringify(res.data.token));
      history.push("/");
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const IsExist = (userEmail) => async (dispatch, getState) => {
  console.log("setIsExist --> ", userEmail);
  axios
    .get(`https://as-findpartner.herokuapp.com/useremail/${userEmail}`)
    .then((res) => {
      // handle success
      console.log(" handle IsExist success-->", res.data);
      if (res.data.length !== 0) {
        dispatch(setMessage("y"));
      } else {
        dispatch(setMessage("z"));
      }
    });
};

export const SignUp = (usersData) => async (dispatch, getState) => {
  console.log("usersData --> ", usersData);
  axios
    .post(`https://as-findpartner.herokuapp.com/signup`, usersData)
    .then((res) => {
      // handle success
      console.log(" handle success-->", res.data);
      dispatch(setIsValid(true));
      history.push("/signin");
    })
    .catch((error) => {
      // handle error
      console.log(error.message);
    });
};

export const getAllApplied = (props) => async (dispatch, getState) => {

  
  let token = getState().users.account.token

  const config = {
    // headers: {
    //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhpZGF5YS1TeWFtIiwiaWF0IjoxNjA0OTk0Mjk5fQ.GBLz3447XaaI50QRlPzzNMP_rCdkK9SWwHZ4t-elhtU`,
    // },
     headers: { Authorization: `Bearer ${token}` }
  };
  axios
    .get(`https://as-findpartner.herokuapp.com/allapply`, config)
    .then((res) => {
      console.log(" getAllApplyed success-->", res.data);
      dispatch(setAllAppliedID(res.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getAllUserProjects = () => async (dispatch, getState) => {
  const state = getState()
  let token = getState().users.account.token
  console.log('dis is ',token)

  
  const config = {
    // headers: {
    //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhpZGF5YS1TeWFtIiwiaWF0IjoxNjA0OTY4OTIwfQ.x4yXsMb23-EBUhOPKcD8BMcUgRnaBLBcInQlHhpDzRk`,
    // },
      headers: { Authorization: `Bearer ${token}` }
  };

  console.log('sdad',token)
  axios
    .get(
      `https://as-findpartner.herokuapp.com/userprojects`,
      config
    )
    .then((res) => {
      // handle success
      console.log(" getAllUserProjects success-->", res.data);
      dispatch(setUserPublishedProjects(res.data));
      localStorage.setItem("MINE",JSON.stringify(res.data))
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const getListOfcountries = () => async (dispatch, getState) => {
  axios
    .get(`https://restcountries.eu/rest/v2/all`)
    .then((res) => {
      // handle success
      let countries = res.data.map((e) => {
        return e.name ;
      });
      const result = countries.filter(word => word !== 'Israel');
      dispatch(setListCountries(result));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const {
  setAllAppliedID,
  setIsValid,
  setMessage,
  setUsers,
  setAccount,
  setUserPublishedProjects,
  signOut,
  setListCountries,
} = users.actions;

export default users.reducer;
