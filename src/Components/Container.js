import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : "rbga(0, 0, 0, 1)"};
`;

function Container({ bgColor, children }) {
  return <Cont bgColor={bgColor}>{children}</Cont>;
}

export default Container;
