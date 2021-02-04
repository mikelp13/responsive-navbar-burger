import React from "react";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  li {
    cursor: pointer;

    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    /* The flex-flow property is a shorthand property for:
    flex-direction: column;
    flex-wrap: nowrap; */
    background-color: #969495;
    position: fixed;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(100%)"};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 250ms ease-in-out;
    padding: 20px;

    li:not(:last-child) {
      margin-right: 0;
    }
  }
`;

const RightNav = ({ navLinks, isOpen }) => {
  return (
    <NavList isOpen={isOpen}>
      {navLinks.map((link) => (
        <li key={link}>{link}</li>
      ))}
    </NavList>
  );
};

export default RightNav;
