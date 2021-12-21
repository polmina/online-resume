import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Panel from "components/shared/panel";
import app from "firebase-config/firebase.js";
import ReactTooltip from "react-tooltip";
import { getFirestore, onSnapshot, doc, updateDoc } from "firebase/firestore";

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  :focus {
    font-size: 4rem;
  }
`;

const Number = styled.div`
  display: grid;
  align-items: center;
  font-size: 3rem;
  padding: 0 4rem;
`;
const Title = styled.div`
  flex: 1;
  display: grid;
  align-items: center;
  text-transform: uppercase;
  font-size: 2rem;
  text-align: center;
`;

const VisitButton = (props) => {
  const [num, setNum] = useState(null);
  const [isButton, setIsButton] = useState(true);
  const db = getFirestore(app);

  const addNum = async () => {
    //setNum(num + 1);
    setIsButton(false);
    const docRef = doc(db, "data", "1");
    await updateDoc(docRef, {
      counter: num + 1,
    });
    setIsButton(true);
  };

  useEffect(() => {
    async function getCities() {
      onSnapshot(doc(db, "data", "1"), (doc) => {
        setNum(doc.data().counter);
      });
    }
    getCities();
  }, []);

  return (
    <Panel
      pos={props.pos}
      button={isButton}
      addStyles={!isButton ? "transform: translateY(10px)" : ""}
    >
      <Wrapper
        onClick={addNum}
        data-tip="Hit me for a super fun experience and increase the visitor counter 🎉!"
      >
        <Number>{num}</Number>
        <Title>
          Hit
          <br /> me!
        </Title>
      </Wrapper>
      <ReactTooltip />
    </Panel>
  );
};

export default VisitButton;
