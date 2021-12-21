import React, { useState } from "react";
import styled from "styled-components";
import Panel from "components/shared/panel";
import ReactTooltip from "react-tooltip";
import MixWhite from "assets/mix-white.png";
import MixBlack from "assets/mix-black.png";
import style from "styles/style";
import { useSelector, useDispatch } from "react-redux";
const TEMPLATE_OPTIONS = ["one", "two"];
const Wrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 0.5rem;
  > * {
    flex: 1;
    font-size: 3rem;
    padding: 1rem;
    text-align: center;
    border-radius: 0.2rem;
    cursor: pointer;
    display: flex;
    > * {
      margin: auto;
    }
  }
`;

const Icon = styled.img`
  height: 3rem;
  aspect-ratio: 1;
`;
const Profile = (props) => {
  const [isButton, setIsButton] = useState(true);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const mixTemplate = () => {
    setIsButton(false);
    let rand =
      TEMPLATE_OPTIONS[Math.floor(Math.random() * TEMPLATE_OPTIONS.length)];
    while (rand === state.currentTemplate) {
      rand =
        TEMPLATE_OPTIONS[Math.floor(Math.random() * TEMPLATE_OPTIONS.length)];
    }
    dispatch({ type: "currentTemplate", value: rand });
    setIsButton(true);
  };
  const icons = {
    black: MixBlack,
    white: MixWhite,
  };
  return (
    <Panel
      pos={props.pos}
      button={true}
      button={isButton}
      addStyles={!isButton ? "transform: translateY(5px)" : ""}
    >
      <Wrapper styles={style} data-tip="Random layout 👷‍♂️!">
        <div onClick={mixTemplate}>
          <Icon src={icons[style(state.currentStyle).text]} />
        </div>
        <ReactTooltip />
      </Wrapper>
    </Panel>
  );
};

export default Profile;
