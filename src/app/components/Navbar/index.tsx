import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../Icon';
import Navigation from './styles';
import { i18n } from '../../locales';

const Navbar: React.FC = () => {
  const scrollDocument = () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  };

  document.addEventListener('scroll', scrollDocument);
  const location = useLocation();
  return (
    <Navigation id="navbar" fixed="top" expand="lg">
      <Container>
        <Navigation.Brand>
          <Link to="/">
            <img src="/logo.svg" alt="igreja" />
          </Link>
        </Navigation.Brand>
        <Navigation.Toggle aria-controls="nav-navbar">
          {' '}
          <Icon name="bars" />{' '}
        </Navigation.Toggle>
        <Navigation.Collapse id="nav-navbar">
          <Nav className="me-auto">
            <Link className={location.pathname === '/' ? 'active nav-link' : 'nav-link'} to="/">
              {i18n`Início`}
            </Link>
            <Link
              className={location.pathname === '/getting-started' ? 'active nav-link' : 'nav-link'}
              to="/getting-started"
            >
              {i18n`Iniciando`}
            </Link>
            <Link
              className={location.pathname === '/documentation' ? 'active nav-link' : 'nav-link'}
              to="/documentation"
            >
              {i18n`Documentação`}
            </Link>
            <Link className={location.pathname === '/about' ? 'active nav-link' : 'nav-link'} to="/about">
              {i18n`Sobre`}
            </Link>
            <Link className={location.pathname === '/login' ? 'active nav-link' : 'nav-link'} to="/login">
              {i18n`Entrar`}
            </Link>
          </Nav>
        </Navigation.Collapse>
      </Container>
    </Navigation>
  );
};

export default Navbar;
