import React from "react";
import styled from "styled-components";
import Panel from "components/panel";

const Wrapper = styled.div``;
const Profile = (props) => {
  return (
    <Panel pos={props.pos}>
      <Wrapper>visit button</Wrapper>
    </Panel>
  );
};

export default Profile;
