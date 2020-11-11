import React,{useEffect} from 'react'
//import { Card, Button, Row, Col, Image } from 'react-bootstrap'
import { connect, useDispatch } from "react-redux";
import { loadUsers, SignUp } from "../../store/users/users.store";

function Users(props) {

    const dispatch = useDispatch();

    useEffect(() => {
  
      const load = async () => {
          await dispatch(loadUsers());
        };
        load()
  }, [dispatch])
  dispatch(SignUp("Email"));  
    return (
        <>
        
        {console.log('users : - ', props)}
    </>
    );
}

const mapStateToProps = (state) => ({
    users: state.users.users,
  });
  
  
  export default connect(mapStateToProps)(Users);
  
  