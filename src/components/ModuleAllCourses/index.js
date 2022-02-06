import { Link } from "react-router-dom";
import bg5 from "../../img/bg-img/bg-5.jpg"

const ModuleAllCourses = () => {
  return (
    <section
      class="welcome_area bg-img background-overlay"
      style={{ backgroundImage: `url(https://rawcdn.githack.com/MariaRaykova/e-learning-react-frontend/d57bd0f59dfcfea8968ee56166d51180501ff946/public/assets/img/bg-img/bg-5.jpg)` }}
    >
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <div class="hero-content">
              {/* <h6>asoss</h6> */}
              <h2 style={{ color: "white" }}>
                Body Contouring Training Online
              </h2>
              <Link to="/courses" className="btn essence-btn">
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ModuleAllCourses;
