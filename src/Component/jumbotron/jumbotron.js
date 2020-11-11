import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

function Jumber(props) {
  const styles = {
    jumbotron: {
      height: 600,
      backgroundImage:
        "linear-gradient( to left, rgba(0,180,219, 0.7), rgba(0,103,139, 0.7)),url('https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?cs=srgb&dl=pexels-fauxels-3182759.jpg&fm=jpg')",
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
      paddingTop: 300,
    },
    text: {
      color: "white",
      fontSize: 30,
      fontWeight: 500,
      marginBottom: 60,
    },
    btn: {
      backgroundColor: "#00B4DB",
      color: "#fff",
      border: "none",
      marginRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontWeight: 500,
      "&:hover": {
        backgroundColor: "#fff",
      },
    },

    btn2: {
      backgroundColor: "#fff",
      color: "#0083B0",
      border: "none",
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontWeight: 500,
    },
  };

  return (
    <>
      <Jumbotron fluid style={styles.jumbotron}>
        <Container>
          <p style={styles.text}>
            If opportunity doesn't knock we will open a door
          </p>
          <p>
            <Link to="/signup">
              <Button className="btn" style={styles.btn}>
                Find a Partner
              </Button>
            </Link>

            <Link to="/signup">
              <Button style={styles.btn2}>Join a Project</Button>
            </Link>
          </p>
        </Container>
      </Jumbotron>
    </>
  );
}

const mapStateToProps = (state) => ({
  users: state.users.account,
  projetcs: state.projects.sessionToken,
});

export default connect(mapStateToProps)(Jumber);
