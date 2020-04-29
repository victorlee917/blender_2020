import React from "react";
import styled from "styled-components";
// import logo_big from "Img/logo_big.png";
import logo_box from "Img/logo_box.png";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-bottom: 0px;
`;

const TitleImg = styled.img`
  height: 80px;
  z-index: 2;
  background-color: white;
  /* animation: pulse 5s infinite; */
`;

const Desc = styled.div`
  font-size: 16px;
  line-height: 24px;
  font-weight: 200;
  text-align: center;
`;

function Header() {
  return (
    <Box className="dD">
      <Title>
        <TitleImg src={logo_box}></TitleImg>
      </Title>
      <Desc>Side Project Crew</Desc>
    </Box>
  );
}

export default Header;
