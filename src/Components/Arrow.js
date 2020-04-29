import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Box = styled.div`
  z-index: 1000;
  bottom: 0;
  position: fixed;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimationBox = styled.div`
  animation-duration: 2s;
  animation-iteration-count: infinite;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: bottom;
  animation-name: bounce-2;
  animation-timing-function: ease;
`;

function Title({ func, current }) {
  return (
    <Box className="dD">
      <AnimationBox>
        <FontAwesomeIcon
          size={"lg"}
          opacity={0.25}
          icon={faChevronDown}
        ></FontAwesomeIcon>
      </AnimationBox>
    </Box>
  );
}

export default Title;
