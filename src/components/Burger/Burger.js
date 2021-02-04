import React, { useState } from "react";
import RightNav from "../RightNav/RightNav";
import styled from "styled-components";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 10;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ isOpen }) => isOpen ? '#373940' : '#a5a681'};
    border-radius: 10px;
    transform-origin: 1px 2px;
    transition: all 200ms linear;


    &:nth-child(1) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) => isOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ isOpen }) => isOpen ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const innitialState = {
  isOpen: false,
  navLinks: ["Home", "About", "Contact us", "Sign In", "Sign Up"],
};

const Burger = () => {
  const [state, setState] = useState({ ...innitialState });

  const onHandleClick = () =>
    setState((prev) => ({ ...prev, isOpen: !state.isOpen }));

  return (
    <>
      <StyledBurger isOpen={state.isOpen} onClick={onHandleClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav isOpen={state.isOpen} navLinks={state.navLinks} />
    </>
  );
};

export default Burger;
