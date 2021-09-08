import React from "react";
import styled from "styled-components";
import Panel from "components/panel";
import { useSelector, useDispatch } from "react-redux";

const Wrapper = styled.div``;

const Profile = (props) => {
  const dispatch = useDispatch();

  return (
    <Panel pos={props.pos}>
      <Wrapper
        onClick={() => {
          dispatch({
            type: "currentStyle",
            value: "dark",
          });
        }}
      >
        description
      </Wrapper>
    </Panel>
  );
};

export default Profile;
