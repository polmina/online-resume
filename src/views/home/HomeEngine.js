
import React, { useEffect } from "react";
import HomeComponent from "./HomeComponent";
import templateBrowser from "../../templates/templateBrowser/templateBrowser";
import templateMobile from "../../templates/templateMobile/templateMobile";

import { useSelector } from "react-redux";
import { BrowserView, MobileView } from 'react-device-detect';

const HomeEngine = () => {
  useEffect(() => {
    console.log(`
    Hello there 👋\n
    Thank you for spying on my console.
    I dunno what your intentions are, maybe you want to know more about me or you just felt curious about the source code...🤔

    Whatever your case might be, thank you for getting this far.
    And if you wish to contact me, both for my code or business inquiries, feel free to use my email below or my Linkedin:

    📧 pol.minana.ruiz[at]gmail.com 
    👨‍💼 https://www.linkedin.com/in/pol-miñana-ruiz/

    See you soon!
    `);
  });
  const data = useSelector((state) => state);


  return (<>
    <BrowserView>
      <HomeComponent template={templateBrowser(data.currentTemplate)} />
    </BrowserView>
    <MobileView>
      <HomeComponent template={templateMobile(data.currentTemplate)} />
    </MobileView>
  </>
  )
};

export default HomeEngine;
