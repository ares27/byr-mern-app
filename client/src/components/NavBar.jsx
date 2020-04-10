import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import styled from 'styled-components';

const Styles = styled.div`

    .navbar { 
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Styles>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">BYR-MERN</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">My GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Styles>
    </div>
  );
}

export default NavBar;