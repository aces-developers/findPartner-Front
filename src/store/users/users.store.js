import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const users = createSlice({
  name: "users",
  initialState: {
    users: [],
    accoutn:{
      token:null,
      user:{},
    }
  
  },
  reducers: {
    setUsers(state, action) {
      console.log("action =====>", action);
      state.users = action.payload;
    },
    setAccount(state, action) {
      console.log('setAccount =====>', action);
      state.accoutn.token = action.payload.token ;
        state.accoutn.user = action.payload.username ;
    },
  },
});

export const loadUsers = () => async (dispatch, getState) => {
    axios
      .get("https://as-findpartner.herokuapp.com/users")
      .then((res) => {
        // handle success
        console.log(' handle success-->',res.data);
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
    .post("https://as-findpartner.herokuapp.com/signin",{},{
      auth: {
        username: userdata.username,
        password: userdata.password
      }
    })
    .then((res) => {
      // handle success
      console.log(' handle success-->',res.data);
        dispatch(setAccount(res.data));
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};


export const { setUsers ,setAccount} = users.actions;

export default users.reducer;
