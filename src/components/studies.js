import React from "react";
import styled from "styled-components";
import Panel from "components/panel";
import Title from "./title";

const Wrapper = styled.div`
`;
const Profile = (props) => {
  return (
    <Panel pos={props.pos}>
      <Wrapper><Title value="Education"/></Wrapper>
    </Panel>
  );
};

export default Profile;
