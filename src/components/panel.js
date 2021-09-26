import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import style from "styles/style";

const Wrapper = styled.div`
  border-radius: 0.2rem;
  position: absolute;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  > div {
    flex: 1;
    border-radius: inherit;
    overflow-y: auto;
  }
  ${(props) => `
      left: ${props.pos[0]}%;
      top: ${props.pos[1]}%;
      right: ${100 - props.pos[2]}%;
      bottom: ${100 - props.pos[3]}%;
      background:${props.styles.primary};
      color: ${props.styles.text};
      ${props.addStyles}
  `}
`;

const Panel = ({ children, pos, addStyles }) => {
  const data = useSelector((state) => state);

  return (
    <Wrapper
      pos={pos.split("/")}
      styles={style(data.currentStyle)}
      addStyles={addStyles}
    >
      {children}
    </Wrapper>
  );
};

export default Panel;
