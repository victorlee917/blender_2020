import React from "react";
import styled from "styled-components";
import logo_middle from "Img/logo_middle.png";

const Box = styled.div`
  z-index: 1000;
  position: fixed;
  top: ${(props) => (props.current === 0 ? "-100px" : "0")};
  transition: 0.5s;
  height: 90px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.label`
  padding: 30px 0px 30px 30px;
  transition: 0.3s ease-in-out;
`;

const Logo = styled.img`
  height: 30px;
  width: auto;
`;

const Right = styled.div`
  padding: 30px 30px 30px 0px;
  display: flex;
  font-size: 20px;
`;

const QuickLink = styled.label`
  opacity: 0.4;
  margin-left: 30px;
  font-weight: 200;
  transition: 0.2s ease-in-out;
  position: relative;
  padding-bottom: 4px;

  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  :hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Input = styled.input`
  display: none;
`;

function Title({ func, current }) {
  const controlOpacity = (value) => {
    document.getElementById(`radio${value}`).checked = true;
    func(value);
  };
  return (
    <Box className="dD" current={current}>
      <Input type="radio" id="radio0" name="gnb"></Input>
      <Left style={{ opacity: current === 0 ? 0 : 1 }} for="radio0">
        <Logo onClick={() => controlOpacity(0)} src={logo_middle}></Logo>
      </Left>
      <Right>
        <Input type="radio" id="radio1" name="gnb"></Input>
        <QuickLink
          for="radio1"
          onClick={() => controlOpacity(1)}
          bgColor={"black"}
        >
          Project
        </QuickLink>

        <Input type="radio" id="radio2" name="gnb"></Input>
        <QuickLink for="radio2" onClick={() => controlOpacity(2)}>
          Member
        </QuickLink>
        <Input type="radio" id="radio3" name="gnb"></Input>
        <QuickLink for="radio3" onClick={() => controlOpacity(3)}>
          Contact
        </QuickLink>
      </Right>
    </Box>
  );
}

export default Title;
