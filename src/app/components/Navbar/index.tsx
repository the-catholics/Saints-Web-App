import React from "react";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import { Navigation } from "./styles";

const Navbar: React.FC = () => {
  document.addEventListener("scroll", scrollDocument);

  function scrollDocument() {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  }

  return (
    <Navigation id="navbar" fixed="top" expand="lg">
      <Container>
        <Navigation.Brand><Link to="/"><img src="/logo.svg" alt="igreja" /></Link></Navigation.Brand>
        <Navigation.Toggle aria-controls="nav-navbar"> <Icon name="bars"/> </Navigation.Toggle>
        <Navigation.Collapse id="nav-navbar">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Início</Link>
            <Link className="nav-link" to="/getting-started">Iniciando</Link>
            <Link className="nav-link" to="/documentation">Documentação</Link>
            <Link className="nav-link" to="/about">Sobre</Link>
            <Link className="nav-link" to="/login">Entrar</Link>
          </Nav>
        </Navigation.Collapse>
      </Container>
    </Navigation>
  );
};

export default Navbar;