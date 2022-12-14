import React from "react";

import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Container className="text-light">
          <Navbar.Brand className="text-light">
            <Link to="home" className="ms-4 text-decoration-none text-light">
              <img src={logo} alt="" style={{ maxWidth: "60px" }} />{" "}
              Fz-SKill-Checker
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="home" className="ms-4 text-decoration-none text-light">
                Home
              </Link>

              <Link
                to="topics"
                className="ms-4 text-decoration-none text-light"
              >
                Topics
              </Link>

              <Link
                to="statistics"
                className="ms-4 text-decoration-none text-light"
              >
                Statistics
              </Link>
              <Link to="blog" className="ms-4 text-decoration-none text-light">
                Blog
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
