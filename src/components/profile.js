import React from "react";
import styled from "styled-components";
import Panel from "components/shared/panel";
import ReactTooltip from "react-tooltip";
import { useSelector } from "react-redux";
import style from "styles/style";
import Image from "assets/profile-image.jpg";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  flex: 1;
  background: url("${Image}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  border-radius: inherit;
  > div {
    position: absolute;
    bottom: 5%;
    right: 5%;
    font-size: 2rem;
  }
`;
const InfoWrapper = styled.div`
  > div {
    margin: 0.5rem 1rem;
  }
`;
const InfoEl = styled.div`
  &:hover {
    font-weight: bold;
  }
`;
const Name = styled.div`
  color: white;
  cursor: default;
  background: rgba(0,0,0,.3);
`
const Profile = (props) => {
  const data = useSelector((state) => state);

  return (
    <Panel pos={props.pos}>
      <Wrapper styles={style(data.currentStyle)}>
        <ImageWrapper background={Image}>
          <Name data-tip="This is me, btw">
            Pol Miñana Ruiz <ReactTooltip />
          </Name>
        </ImageWrapper>
        <InfoWrapper>
          <div>💌 pol.minana.ruiz[at]gmail.com</div>
          <InfoEl>
            <a
              href="https://www.google.es/maps/place/Spain/"
              target="_blank"
              data-tip="Paella, toros y olé ! "
            >
              🌏 Spain <ReactTooltip />
            </a>
          </InfoEl>
          <InfoEl>
            <a
              href="https://www.linkedin.com/in/pol-mi%C3%B1ana-ruiz/"
              target="_blank"
              data-tip="Know more about me!"
            >
              🟦 https://linkedin.com/in/pol.minana.ruiz
              <ReactTooltip />
            </a>
          </InfoEl>
        </InfoWrapper>
      </Wrapper>
    </Panel>
  );
};

export default Profile;
