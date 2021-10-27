import React from "react";
import styled from "styled-components";
import Panel from "components/shared/panel";
import Title from "./title";

const Wrapper = styled.div`
  padding: 1rem;
`;
const DescriptionWrapper = styled.div``;

const Profile = (props) => {
  return (
    <Panel pos={props.pos}>
      <Wrapper>
        <Title value="About me" />

        <DescriptionWrapper>
          I am a quality obsessed and result-oriented developer with the will of
          being constantly learning about new technologies
        </DescriptionWrapper>
      </Wrapper>
    </Panel>
  );
};

export default Profile;
