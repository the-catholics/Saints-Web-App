import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

export default styled(Navbar)`
  background-color: var(--background-ts);
  padding: 16px 0;
  transition: var(--ts);

  &.scrolled {
    padding: 8px 0;
  }

  .navbar-brand {
    img {
      width: 40px;
    }
  }

  .navbar-toggler {
    transform: rotate(-90deg);
    transition: var(--ts);
    border: none;
    padding: 0;
    &.collapsed {
      transform: rotate(0deg);
    }
    &:focus {
      box-shadow: none;
    }
  }

  .navbar-collapse {
    .navbar-nav {
      gap: 10px;
      a.nav-link {
        color: var(--text);
        padding: 8px 16px;
        text-align: center;
        border-bottom: 3px solid transparent;
        &:hover {
          border-bottom: 3px solid var(--primary);
        }
        &.active {
          border-bottom: 3px solid var(--primary);
        }
      }
    }
  }
`;
