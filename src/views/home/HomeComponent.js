import React from "react";
import styled from "styled-components";
import component from "./component";
import { useSelector } from "react-redux";
import style from "styles/style";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  ${(props) => `
  background:${props.styles.secondary};
`}
`;

const loadComponents = (template) => {
  let views = [];

  template.forEach(([key, pos]) => {
    views.push(component(key, pos));
  });
  return views;
};
const HomeComponent = (props) => {
  const data = useSelector((state) => state);
  return (
    <Wrapper styles={style(data.currentStyle)}>
      {loadComponents(props.template)}
    </Wrapper>
  );
};

export default HomeComponent;
