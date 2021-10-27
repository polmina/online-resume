import React, { useState } from "react";
import styled from "styled-components";
import Panel from "components/shared/panel";
import style from "styles/style";
import { useSelector, useDispatch } from "react-redux";
import PaletteWhite from "assets/palette-white.png";
import PaletteBlack from "assets/palette-black.png";
const TEMPLATE_OPTIONS = ["light", "dark", "red"];

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
  const state = useSelector((state) => state);

  const dispatch = useDispatch();
  const mixTemplate = () => {
    setIsButton(false);
    let rand =
      TEMPLATE_OPTIONS[Math.floor(Math.random() * TEMPLATE_OPTIONS.length)];
    while (rand === state.currentTemplate) {
      rand =
        TEMPLATE_OPTIONS[Math.floor(Math.random() * TEMPLATE_OPTIONS.length)];
    }
    dispatch({ type: "currentStyle", value: rand });
    setIsButton(true);
  };
  const icons = {
    black: PaletteBlack,
    white: PaletteWhite,
  };

  return (
    <Panel
      pos={props.pos}
      button={isButton}
      addStyles={!isButton ? "transform: translateY(5px)" : ""}
    >
      <Wrapper styles={style}>
        <div onClick={mixTemplate}>
          <Icon src={icons[style(state.currentStyle).text]} />
        </div>
      </Wrapper>
    </Panel>
  );
};

export default Profile;
