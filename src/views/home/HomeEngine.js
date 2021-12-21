import React, { useEffect } from "react";
import HomeComponent from "./HomeComponent";
import template from "../../templates/template";
import { useSelector } from "react-redux";

const HomeEngine = () => {
  useEffect(() => {
    console.log(`
    Hello there 👋\n
    Thank you for being interested in me and my work, or maybe just curious🤔...\n

    Anyway feel free to contact me:
    📧 pol.minana.ruiz[at]gmail.com 
  
    `);
  });
  const data = useSelector((state) => state);

  return <HomeComponent template={template(data.currentTemplate)} />;
};

export default HomeEngine;
