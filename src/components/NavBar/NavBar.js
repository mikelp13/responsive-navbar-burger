import React from "react";
import styled from "styled-components";
import Burger from "../Burger/Burger";

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #969495;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  background-color:#373940;
  color: #f1f1f1;
  .logo {
    padding: 15px 0;
  }
`;

const NavBar = () => {
  
  return (
    <Nav>
      <div className="logo">LOGO</div>
      <Burger />
    </Nav>
  );
};

export default NavBar;
