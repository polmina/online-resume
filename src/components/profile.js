import React from "react";
import styled from "styled-components";
import Panel from "components/panel";
import { useSelector } from "react-redux";
import style from "styles/style";
import Image from "assets/profile-image.jpg";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  flex: 1;
  background: url("https://as01.epimg.net/masdeporte/imagenes/2021/01/20/polideportivo/1611143860_208083_1611143995_noticia_normal_recorte1.jpg");
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
          <InfoEl>(+34) 682 89 06 00</InfoEl>
          <InfoEl>pol.minana.ruiz@gmail.com</InfoEl>
          <InfoEl>Spain</InfoEl>
          <InfoEl>www.linkedin.com/in/pol.minana.ruiz</InfoEl>
        </InfoWrapper>
      </Wrapper>
    </Panel>
  );
};

export default Profile;
