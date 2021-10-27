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
        <SkillsSubtitle>Time invested on each of the stack</SkillsSubtitle>
        <Skillbar perc="95" title="Javascript" />
        <Skillbar perc="90" title="ReactJS" />
        <Skillbar perc="90" title="NodeJS & ExpressJS" />
        <Skillbar perc="80" title="Agile & SCRUM" />
        <Skillbar perc="90" title="Archt. & Pattern Design" />
        <Skillbar perc="60" title="Java" />
      </Wrapper>
    </Panel>
  );
};

export default TechStack;
