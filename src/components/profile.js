import React from "react";
import styled from "styled-components";
import Panel from "components/panel";
import { useSelector, useDispatch } from "react-redux";
import style from "styles/style";
const Wrapper = styled.div``;
const Profile = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  console.log(style(data.currentStyle).primary);
  return (
    <Panel pos={props.pos}>
      <Wrapper
        styles={style(data.currentStyle)}
        onClick={() => {
          dispatch({
            type: "currentTemplate",
            value: "two",
          });
        }}
      >
        profile
      </Wrapper>
    </Panel>
  );
};

export default Profile;
