import React from "react";
import styled from "styled-components";
import Panel from "components/panel";
import Title from "./title"
const Wrapper = styled.div`
  padding: 1rem;
`;
const DescriptionWrapper = styled.div`
 
`;
const SkillsWrapper = styled.div``;
const SkillsTitle = styled.div``;
const SkillsElement = styled.div`
  ${(props) => `
display: flex;
  > div:first-child {
    background: red;
    flex: 1;
    position: relative;
    &:before {
      content: "${props.title}";
      background: blue;
      height: 100%;
      transition: 1s;
      width: ${props.perc}%;
      position: absolute;
    }
  }
  > div:last-child {
  }
`}
`;
const SkillsSubtitle = styled.div``;
const Profile = (props) => {

  return (
    <Panel pos={props.pos}>
      <Wrapper

      >
        <DescriptionWrapper>
          I am a quality obsessed and result-oriented developer with the will of
          being constantly learning about new technologies. I have experience
          leading a small team of developers towards a common goal and leading a
          company's flagship application to deliver maximum value to our
          clients.
        </DescriptionWrapper>
        
        <SkillsWrapper>
          <Title value="Tech stack"/>
          <SkillsSubtitle>Time invested on each of the stack</SkillsSubtitle>
          <SkillsElement perc="95" title="Javascript">
            <div />
            <div>95%</div>
          </SkillsElement>
          <SkillsElement perc="90" title="ReactJS">
            <div />
            <div>90%</div>
          </SkillsElement>
          <SkillsElement perc="90" title="NodeJS & ExpressJS">
            <div />
            <div>90%</div>
          </SkillsElement>
          <SkillsElement perc="80" title="Agile & SCRUM">
            <div />
            <div>80%</div>
          </SkillsElement>
          <SkillsElement perc="90" title="Archt. & Pattern Design">
            <div />
            <div>75%</div>
          </SkillsElement>
          <SkillsElement perc="60" title="Java">
            <div />
            <div>60%</div>
          </SkillsElement>
        </SkillsWrapper>
      </Wrapper>
    </Panel>
  );
};

export default Profile;
