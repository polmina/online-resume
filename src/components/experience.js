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
  margin: 0 0.5rem 0 0;
`;
const ItemDescription = styled.div`
  padding: 0.5rem;
`;
const ItemCompany = styled.div`
`;
const ItemDate = styled.div`
  transform: skewX(-15deg) translateY(4px);
`;

const loadExperiences = (experiences) => {
  const views = [];
  experiences.forEach((experience) => {
    views.push(
      <ItemRow>
        <div style={{ display: "flex" }}>
          <ItemTitle>{experience.company}</ItemTitle>
          <ItemDate>{experience.date}</ItemDate>
        </div>
          <ItemCompany>{experience.title}</ItemCompany>
        <ItemDescription>{experience.description}</ItemDescription>
      </ItemRow>
    );
  });

  return views;
};
const Experience = (props) => {
  return (
    <Panel pos={props.pos}>
      <Wrapper>
        <Title value="Work experience"></Title>
        <Main>{loadExperiences(experiences)}</Main>
      </Wrapper>
    </Panel>
  );
};

export default Experience;

const experiences = [
  {
    title: "Software Development Engineer",
    description: "Worked across several teams and full-stack technologies developing applications serving users worldwide",
    company: "Amazon",
    country: "Spain",
    date: "2023 - Present",
  },
  {
    title: "Fullstack Developer",
    description: `Working with ExpressJS & ReactJS & AWS for an end-to-end development. `,
    company: "Wheelhub.es",
    country: "Spain",
    date: "2022 - 2023",
  },
  {
    title: "Fullstack Developer (part-time)",
    description: `I develop a mobile application made with React-native and hosted on AWS. Backbone made with serverless computing`,
    company: "KiKi Social",
    country: "USA (remote)",
    date: "2021 - 2023",
  },
  {
    title: "Tech Lead",
    description: `I led the digital transformation of the company, from
                  traditional to a fully automated service with infinite scalability.
                  MongoDB, ExpressJS, ReactJS, NodeJS, with Heroku and AWS for
                  serverless computing.`,
    company: "Pongomilogo.es",
    country: "Spain",
    date: "2021 - 2022",
  },
  {
    title: "Tech Lead",
    description: `I managed the development team and designed the overall
                  architecture of company’s flagship.
                  Master-slave like app for massive online real-time wine tastings.
                  ReactJS, Bootspring, Websockets, RESTful API, NoSQL.`,
    company: "HappyCustomerBox",
    country: "Spain",
    date: "2020 - 2021",
  },
  {
    title: "Android developer",
    description: `I designed and developed company’s flagship.
                  Android surveys apps with real-time data visualization.
                  Android native, Spark, RESTful API, JavaScript vanilla.`,
    company: "HappyCustomerBox",
    country: "Spain",
    date: "2018 - 2020",
  },
  {
    title: "Junior java developer",
    description: `2 months internship.
                  I developed a web interface to read/write real radio parameters.
                  Java, SNMP, MosaiX Service Template Archetype`,
    company: "HappyCustomerBox",
    country: "Spain",
    date: "May-Jun 2018",
  },
];
