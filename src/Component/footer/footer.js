import React from "react";
//import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
//import { NavLink,Link } from "react-router-dom";

export default function Footer(props) {
  return (
    <>
      <style type="text/css">
        {`
    .footer {
        padding-top:2%;
        text-align: center;
        background-color: #fff;
        //color: white;
        border:1px solid black;
        padding-bottom: 20px;

    }
    
    `}
      </style>
       <footer className="footer">&copy; 2020  Aces</footer> 
     
    </>
  );
}
