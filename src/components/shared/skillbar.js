import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import style from "styles/style";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  ${(props) => `
    display: flex;
    > div:first-child {
      background: ${props.styles.terciary};
      flex: 1;
      position: relative;
      border-radius: 0.2rem;
      margin: 0.2rem 0;
      padding: 1rem 0;
      &:before {
        content: "${props.title}";
        padding: 0.5rem 0 0.5rem 0.5rem;
        background: ${props.styles.accent};
        top:0;
        bottom:0;
        border-radius: 0.2rem;
        transition: 1s;
        width: ${props.perc}%;
        position: absolute;
      }
      
    }
    span{
      margin: auto 0.5rem;
    }
`}
`;

const Skillbar = (props) => {
  const [width, setWidth] = useState(0);
  const data = useSelector((state) => state);

  useEffect(() => {
    setWidth(props.perc);
  }, []);
  return (
    <Wrapper perc={width} title={props.title} styles={style(data.currentStyle)}>
      <div />
      <span>
        <CountUp start={0} end={props.perc} duration={0.5} />%{" "}
      </span>
    </Wrapper>
  );
};

export default Skillbar;
