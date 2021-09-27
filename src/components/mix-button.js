import React, { useState } from "react";
import styled from "styled-components";
import Panel from "components/panel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom } from "@fortawesome/free-solid-svg-icons";
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

const Profile = (props) => {
  const [isButton, setIsButton] = useState(true);

  const dispatch = useDispatch();
  const currentTemplate = useSelector((state) => state.currentTemplate);
  const mixTemplate = () => {
    setIsButton(false);
    let rand =
      TEMPLATE_OPTIONS[Math.floor(Math.random() * TEMPLATE_OPTIONS.length)];
    while (rand === currentTemplate) {
      rand =
        TEMPLATE_OPTIONS[Math.floor(Math.random() * TEMPLATE_OPTIONS.length)];
    }
    dispatch({ type: "currentTemplate", value: rand });
    setIsButton(true);
  };
  return (
    <Panel
      pos={props.pos}
      button={true}
      button={isButton}
      addStyles={!isButton ? "transform: translateY(5px)" : ""}
    >
      <Wrapper styles={style}>
        <div onClick={mixTemplate}>
          <FontAwesomeIcon icon={faRandom} />
        </div>
      </Wrapper>
    </Panel>
  );
};

export default Profile;
