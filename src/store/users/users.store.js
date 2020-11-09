
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {browserHistory} from 'react-router'
import { Redirect } from "react-router";

const users = createSlice({
  name: "users",
  initialState: {
    users: [],
    account: {
      token: null,
      username: null,
      userid:null,
    },
    message: null,
    isValid:false,

/*    AllAppliedID:[],*/  
  AppliedProjects:[],
    userPublishedProjects:[]

  },
  reducers: {
    setUsers(state, action) {
      console.log('setUsers =====>', action);
      state.users = action.payload;
    },
    setAccount(state, action) {
      console.log('setAccount =====>', action);
      state.account.token = action.payload.token;
      state.account.username = action.payload.username;
      state.account.userid = action.payload.username;
      
    },
    setMessage(state, action) {
      console.log('setMessage =====>', action);
      state.message = action.payload;
      
      console.log('setMessage =====>',   state.message );
    },
    setIsValid(state, action) {
      console.log('setIsValid =====>', action);
      state.isValid = action.payload;
      
      console.log('setIsValid =====>',   state.isValid );
    },
    /*setAllAppliedID(state, action) {
        console.log("AllAppliedID action  =====>", action);
        state.AllAppliedID = action.payload;
        //state.AllAppliedID = action.payload.map(proj=>(proj.projectId));
      },*/
   
      setUserPublishedProjects(state, action) {
        console.log("userPublishedProjects action =====>", action);
        state.userPublishedProjects = action.payload;
      },

      
  },
});
const localhost = 'localhost:4000';
let herokuapp = 'as-findpartner.herokuapp.com';
export const loadUsers = () => async (dispatch, getState) => {
  console.log('loadUsers')
  axios
    .get(`https://${herokuapp}/users`)
    .then((res) => {
      // handle success
      console.log(' handle success loadUsers -->', res.data);
      dispatch(setUsers(res.data));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};


export const SignIn = (userdata) => async (dispatch, getState) => {
  console.log(userdata);
  axios
    .post(`https://${herokuapp}/signin`, {}, {
      auth: {
        username: userdata.username,
        password: userdata.password
      }
    })
    .then((res) => {
      // handle success
      console.log(' handle success-->', res.data);
      dispatch(setAccount(res.data));
      localStorage.setItem('account',JSON.stringify(res.data) )
      localStorage.setItem('token',JSON.stringify(res.data.token) )
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export const IsExist = (userEmail) => async (dispatch, getState) => {
  console.log('setIsExist --> ', userEmail)
  axios
    .get(`https://${herokuapp}/useremail/${userEmail}`)
    .then((res) => {
      // handle success
      console.log(' handle success-->', res.data);
      if(res.data.length!==0){
        dispatch(setMessage('y'));
      }else{
        dispatch(setMessage('z'));
      }
     
    })
}

export const SignUp = (usersData) => async (dispatch, getState) => {
  console.log('usersData --> ', usersData)
  axios
    .post(`https://${herokuapp}/signup`, usersData)
    .then((res) => {
      // handle success
      console.log(' handle success-->', res.data);
      dispatch(setIsValid(true));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });

}
/*export const getAllApplied = (props) => async (dispatch, getState) => {

    const config = {
       headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhpZGF5YS1TeWFtIiwiaWF0IjoxNjA0OTMxNjg3fQ.EClvcDWAtK3Ap4XcR2lwlA5-zpqEjlTLeQKJhKoB_tI` }
    //  headers: { Authorization: `Bearer ${token}` }
  };
     axios.get(`https://${herokuapp}/allapply`, config)
      .then((res) => {
        console.log(" getAllApplyed success-->", res.data);
        dispatch(setAllAppliedID(res.data))
    })
      .catch((error) => {
        console.log(error);
      });
  };*/

  export const getAllUserProjects = () => async (dispatch, getState) => {
   
 
     const config = {
       headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkhpZGF5YS1TeWFtIiwiaWF0IjoxNjA0OTMxNjg3fQ.EClvcDWAtK3Ap4XcR2lwlA5-zpqEjlTLeQKJhKoB_tI` }
    //   headers: { Authorization: `Bearer ${token}` }
   };
        
     axios.get(
         `https://${herokuapp}/userprojects`,
         //bodyParameters,
         config
       )
       .then((res) => {
         // handle success
         console.log(" getAllUserProjects success-->", res.data);
         dispatch(setAllUserProjects(res.data));
       })
       .catch((error) => {
         // handle error
         console.log(error);
       });
   };



   
export const {setIsValid, setMessage, setUsers, setAccount ,setAllUserProjects} = users.actions;

export default users.reducer;

