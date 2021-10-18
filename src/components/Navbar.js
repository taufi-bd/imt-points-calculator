import React from "react";
import styled from "styled-components";
import { devices } from "../devices";
const Navbar = ({ total, reset }) => {
  return (
    <Nav>
      <Wrapper>
        {" "}
        <div>
          <Button onClick={reset}>Reset</Button>
        </div>
        <div>Total: {total}</div>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #002d4f;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  margin: 0 5%;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-size: 20px;
  color: #f2f2f2;
  @media ${devices.tablet} {
    padding: 9px 0;
    font-size: 22px;
  }
  @media ${devices.laptop} {
    padding: 10px 0;
    font-size: 24px;
  }
  @media ${devices.desktop} {
    padding: 11px 0;
    font-size: 26px;
  }
`;

const Button = styled.button`
  font-family: "Lato", sans-serif;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 0.3em;
  padding-bottom: 0.3em;
  cursor: pointer;
`;
