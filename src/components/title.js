import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`;
const Title = (props) => {
  return <Wrapper>{props.value}</Wrapper>;
};

export default Title;
