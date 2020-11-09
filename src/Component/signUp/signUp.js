import React, { useState } from "react";
import { Alert, Card, Form, Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { loadUsers, IsExist } from "../../store/users/users.store";
import { Link } from "react-router-dom";
import { If, Then, Else } from '../IF/'
import { Redirect } from "react-router";
function Signup(props) {

  const dispatch = useDispatch();
  const [email,setEmail]= useState('');
  const handlesubmit = (e) => {
    e.preventDefault();
    
   
    const load = async () => {
      console.log("event ->>>>",email);
      await dispatch(IsExist(email));

    };

    load();



  };

  const handleChange=(e)=>{
    setEmail(e.target.value);
  }


  return (
    <>

      <style type="text/css">
        {`
       .inputs {
           width:50%;
           margin:2% 25% ;
      }
    
    `}
      </style>

      <Card className="text-center">
        <Card.Header>Sign UP</Card.Header>
        <Card.Body>
          <Form onSubmit={handlesubmit}>
            <Button variant="primary">Continue with LinkedIn</Button>

            <Form.Group controlId="formBasicEmail" >
              <Form.Control name='email' type="email" onChange={handleChange} placeholder="ex: John@gmail.com" className="inputs" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>

            <Button type='submit' variant="primary">Continue with Email</Button>

          </Form>
        </Card.Body>
      </Card>
      {/* {
        props.message &&
     
      
      } */}

      <If condition={props.message==='y'} >
        <Then>
          <Alert variant="danger">
           
            <Alert.Link href="#"> you are already have Account  <Link to="/SignIn"> go to Login  </Link></Alert.Link>.
      </Alert>
        </Then>
      </If>
      <If condition={props.message==='z'} >
        <Then>
          <Redirect to={{
            pathname: "/Regisration",
            state: { email: email }
          }}  />
     
        </Then>
      </If>




    </>
  )

}

const mapStateToProps = (state) => ({
  users: state.users.users,
  message: state.users.message,
});


export default connect(mapStateToProps)(Signup);

