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
  background: url("https://i1.wp.com/worldvisionit.com/wp-content/uploads/2019/02/kisspng-computer-icons-avatar-male-super-b-5ac405d55a6662.3429953115227959893703.png?fit=512%2C512&ssl=1");
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
            <a href="tel:+34682890600" target="_blank">
              (+34) 682 89 06 00
            </a>
          </InfoEl>
          <InfoEl>
            <a href="mailto:pol.minana.ruiz@gmail.com" target="_blank">
              pol.minana.ruiz@gmail.com
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
