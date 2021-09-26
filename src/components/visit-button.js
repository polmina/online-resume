import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Panel from "components/panel";
import firebase from "firebase-config/firebase"
import { getDatabase, ref, onValue, set } from "firebase/database";

const Wrapper = styled.div`
  display: flex;
  cursor: pointer;
  :focus {
   font-size: 4rem;
  }
`;

const Number = styled.div`
  display:grid;
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
 

const Profile = (props) => {
  const [num, setNum] = useState(999);
  const database = getDatabase(firebase);
  const addNum = () => {
    setNum(num+1)
  };
  /*
  useEffect(()=>{
    const counter = ref(database, "data/1/counter");
    onValue(counter, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }, [])
  */
  return (
    <Panel pos={props.pos}>
      <Wrapper onClick={addNum}>
        <Number>{num}</Number>
        <Title>
          Hit
          <br /> me!
        </Title>
      </Wrapper>
    </Panel>
  );
};

export default Profile;
