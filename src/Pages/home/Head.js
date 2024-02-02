import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo512 from "../../assets/img/logo512.png";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContextProvider";
//import { useEffect } from "react";

function Head() {
  const { text } = useContext(UserContext);
  const record = text?.length;
  return (
    <Navbar expand="lg" className=" bg-body-tertiary">
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo512} className="Head-logo" alt="img logo" />
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <NavLink to="/" className="ms-5 link">
              Home
            </NavLink>
            <NavLink to="/SignIn" className="ms-5 link">
              Sign in
            </NavLink>
            <NavLink to="/Register" className="ms-5 link">
              Register
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div className=""> 
    <h1>{record}</h1>
    </div>
    </Navbar>
  );
}

export default Head;
