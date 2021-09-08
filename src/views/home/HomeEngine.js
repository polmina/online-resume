import React from "react";
import HomeComponent from "./HomeComponent";
import template from "../../templates/template";
import { useSelector } from "react-redux";

const HomeEngine = () => {
  const data = useSelector((state) => state);

  return <HomeComponent template={template(data.currentTemplate)} />;
};

export default HomeEngine;
