import React from "react";
import wall3 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/wall2.jpg";
import wall2 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/wall3.jpg";
import wall4 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/wall4.jpg";
import wall9 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/wall9.jpg";
import wall6 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/wall6.jpg";
import wall7 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/wall7.jpg";
import wall8 from "C:/Users/veron/Downloads/examensarbete/planty-main/planty-main/src/assets/wall88.jpg";

import News from "../Components/News";

function About() {
  return (
    <div>
      <p className="about-title"> Where it all began... </p>

      <div className="about-img">
        <img src={wall3} alt="" />
        <img src={wall8} alt="" />
        <img src={wall7} alt="" />
        <img src={wall9} alt="" />
      </div>

      <div className="about-text-container">
        <p className="about-text">
          "What seems to be just another page in your sitemap, probably
          accessible through your header and/or footer, is actually one of your
          most compelling pieces of content. Or at least, it should be."
        </p>
      </div>

      <News />
    </div>
  );
}

export default About;
