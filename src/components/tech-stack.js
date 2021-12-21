import React from "react";
import styled from "styled-components";
import Panel from "components/shared/panel";
import Title from "./title";
import Skillbar from "./shared/skillbar";
const Wrapper = styled.div`
  padding: 1rem;
`;

const SkillsSubtitle = styled.div`
  margin: 0.5rem 0;
`;
const TechStack = (props) => {
  return (
    <Panel pos={props.pos}>
      <Wrapper>
        <Title value="Tech stack" />
        <SkillsSubtitle>Time invested in each stack</SkillsSubtitle>
        <Skillbar perc="95" title="Javascript & NodeJS" />
        <Skillbar perc="90" title="ReactJS" />
        <Skillbar perc="85" title="Amazon Web Services" />
        <Skillbar perc="65" title="Architeture" />
        <Skillbar perc="60" title="ExpressJS" />
        <Skillbar perc="60" title="Agile & SCRUM" />
      </Wrapper>
    </Panel>
  );
};

export default TechStack;
