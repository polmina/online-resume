import React from "react";
import styled from "styled-components";
import Panel from "components/shared/panel";
import { useSelector } from "react-redux";
import style from "styles/style";
import Image from "assets/profile-image.jpg";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  flex: 1;
  background: url("https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-hand-drawn-modern-vector-id1273297997?k=20&m=1273297997&s=170667a&w=0&h=PBlcNpZMD4WQkX_Ot6kOY1_WxuKc2MARNWbfbtRo8vk=");
  background-position: center;
  background-size: contain;
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
const InfoEl = styled.div``;
const Profile = (props) => {
  const data = useSelector((state) => state);

  return (
    <Panel pos={props.pos}>
      <Wrapper styles={style(data.currentStyle)}>
        <ImageWrapper background={Image}>
          <div>Pol Miñana Ruiz</div>
        </ImageWrapper>
        <InfoWrapper>
          <InfoEl>
            <a href="mailto:pol.minana.ruiz[at]gmail.com" target="_blank">
              pol.minana.ruiz[at]gmail.com
            </a>
          </InfoEl>
          <InfoEl>
            <a href="https://www.google.es/maps/place/Spain/" target="_blank">
              Spain
            </a>
          </InfoEl>
          <InfoEl>
            <a href="https://linkedin.com/in/pol.minana.ruiz" target="_blank">
              https://linkedin.com/in/pol.minana.ruiz
            </a>
          </InfoEl>
        </InfoWrapper>
      </Wrapper>
    </Panel>
  );
};

export default Profile;
