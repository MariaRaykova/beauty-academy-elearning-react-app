import React from "react";
import ModuleAllCourses from "../../components/ModuleAllCourses";
import ModulePopular from "../../components/ModulePopular";
import ModuleSale from "../../components/ModuleSale";
import ModuleTopCategoryArea from "../../components/ModuleTopCategoryArea";
// import { GitHubIcon } from "../components/icons";
import PageWrapper from "../../components/PageWrapper";
import brand1 from "../../img/core-img/brand1.png"
import brand2 from "../../img/core-img/brand2.png"
import brand3 from "../../img/core-img/brand3.png"
import brand4 from "../../img/core-img/brand4.jpg"
import brand5 from "../../img/core-img/brand5.png"
import brand6 from "../../img/core-img/brand6.png"
const Home = () => {
  return (
    <PageWrapper>
      <div>
        <ModuleAllCourses />
        {/* <ModuleTopCategoryArea /> */}
        <ModulePopular />
        <ModuleSale />
        {/* Logos of popular brands */}
        <div class="brands-area d-flex align-items-center justify-content-between">
          <div class="single-brands-logo">
            <img src={brand1} alt="" />
          </div>

          <div class="single-brands-logo">
            <img src={brand2} alt="" />
          </div>

          <div class="single-brands-logo">
            <img src={brand3} alt="" />
          </div>

          <div class="single-brands-logo">
            <img src={brand4} alt="" />
          </div>

          <div class="single-brands-logo">
            <img src={brand5} alt="" />
          </div>

          <div class="single-brands-logo">
            <img src={brand6} alt="" />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default Home;
