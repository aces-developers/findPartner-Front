import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const users = createSlice({
  name: "users",
  initialState: {
    users: [],
    
  },
  reducers: {
    setUsers(state, action) {
      console.log('action =====>', action);
        state.users = action.payload ;
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
  

export const { setUsers } = users.actions;

export default users.reducer;