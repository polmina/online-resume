import React from "react";
import styled from "styled-components";
import Panel from "components/shared/panel";
import Title from "./title";

const Wrapper = styled.div`
  padding: 1rem;
`;
const Main = styled.div`
  > div:last-child {
    border: 0;
  }
`;
const ItemRow = styled.div`
  padding: 0.5rem 0;
  border-bottom: 1px solid grey;
`;
const ItemTitle = styled.div`
  font-weight: bold;
  font-size: 1.3rem;
`;
const ItemDescription = styled.div`
  padding: 0.5rem;
`;
const ItemCompany = styled.div`
  margin: 0 0.5rem 0 0;
`;
const ItemDate = styled.div`
  border-left: 1px solid grey;
  padding: 0 0.5rem;
  transform: skewX(-15deg);
`;

const loadExperiences = (experiences) => {
  const views = [];
  experiences.forEach((experience) => {
    views.push(
      <ItemRow>
        <ItemTitle>{experience.title}</ItemTitle>
        <div style={{ display: "flex" }}>
          <ItemCompany>{experience.company}</ItemCompany>
          <ItemDate>{experience.date}</ItemDate>
        </div>
        <ItemDescription>{experience.description}</ItemDescription>
      </ItemRow>
    );
  });

  return views;
};
const education = (props) => {
  return (
    <Panel pos={props.pos}>
      <Wrapper>
        <Title value="Education"></Title>
        <Main>{loadExperiences(experiences)}</Main>
      </Wrapper>
    </Panel>
  );
};

export default education;

const experiences = [
  {
    title: "Computer Science",

    company: "Universitat Oberta de Catalunya",
    country: "Spain",
    date: "2020-2021",
  },
  {
    title: "Higher Technician in Web development",

    company: "Institut Nicolau Copèrnic",
    country: "Spain",
    date: "2019-2020",
  },
  {
    title: "AHigher technician in multiplatform development",

    company: "HappyCustomerBox",
    country: "Spain",
    date: "2017-2019",
  },
];
