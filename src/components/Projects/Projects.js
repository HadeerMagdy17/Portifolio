import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/hotel.png";
import emotion from "../../Assets/Projects/quiz.png";
import editor from "../../Assets/Projects/pms.png";
import chatify from "../../Assets/Projects/ecomm.png";
import suicide from "../../Assets/Projects/group.png";
import bitsOfCode from "../../Assets/Projects/quran.png";
import bitsOfCode1 from "../../Assets/Projects/mdb.png";
import food from "../../Assets/Projects/food.png";
import holy from "../../Assets/Projects/holiday.png";
import editor1 from "../../Assets/Projects/1.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Ecommerce store"
              description="build with react.js. Have features which allows Products Browsing An intuitive interface for users to browse through a wide range of products. smooth shopping with add to cart and  Flexible payement for product orders cash and online."
              ghLink="https://github.com/HadeerMagdy17/Ecommerce-app"
              demoLink="https://ecommerce1-app-store.netlify.app/"
            />
          </Col>

    

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Project management system"
              description="PMS is build with react.js.it has Authentication ,user management roles (Manager/Employee)
,Users CRUD,dashboard with Charts
,projects CRUD
,Tasks CRUD
,Drag and drop
and support Dark and light Theme."
              ghLink="https://github.com/HadeerMagdy17/project-management-system"
              demoLink="https://project-management-system-1.netlify.app/"
            />
          </Col>
       
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={holy}
              isBlog={false}
              title="Travel"
              description="where I've harnessed the power of React.js and Sass to create 
an innovative and user-friendly travel application.
Travel is designed to make exploring new destinations easier and more enjoyable.
 Whether you're planning your next adventure or just dreaming about future travels, this app has you covered!,and this website is fully responsive."
              ghLink="https://github.com/hadeerMSN/14-cocktails"
              demoLink="https://cocktails-react-12e567.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Hotel reservation system"
              description="build with react js  and typescript ,it has Authentication , Management roles (admin/logged-user/unlogged user)
& admin pages (dashboard/charts
,Users CRUD,Rooms CRUD,Ads CRUD,Bookings CRUD,Facilities CRUD)
 & user pages
,landing page(Display/Favourites/comment/Rate),Payment process for reservation"
              ghLink="https://github.com/HadeerMagdy17/Hotel-System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food app"
              description="build with react js ,bootstrap ,with food upp there are roles for (user/admin) there is authentication system , many cruds for recipes and categories ,users"
              ghLink="https://github.com/HadeerMagdy17/user-food-app"
              demoLink="https://hadeer-food-app11.netlify.app/"
            />
          </Col>
     

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="quiz app"
              description="Role-based  (Instructor/Student),Students can enter a unique quiz code provided by the instructor to access the quiz.
 Authentication: Secure login/authentication system ,Smooth navigation through quiz questions with options to move forward, backward, and jump to specific questions.
, Submission: Ability to submit the quiz once all questions are answered or when the timer expires.
, Accessibility:Ensuring the app is accessible to students with disabilities.
, Data Security: Implementing robust security measures to protect student data and ensure the integrity of quiz content.

"
              ghLink="https://github.com/HadeerMagdy17/quiz-app"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Quran-app"
              description="build with React.js ,typescript and Tailwind Css which support show all quran sura which can  audio or read it,and this website is fully responsive."
              ghLink="https://github.com/HadeerMagdy17/quran-app"
              demoLink="https://hadeer-magdy-quran-app.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Group CRUD"
              description="using react js , simple crud that you can add group and display in table and also can edit or delete."
              ghLink="https://github.com/HadeerMagdy17/group-management-system"
               demoLink="https://group-system.netlify.app/"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode1}
              isBlog={false}
              title="Movies-Next-app"
              description="build with Next.js and Tailwind Css which support show all movies and each movie details ,can get top rated movies or trending,
               it support dark mode ,and this website is fully responsive."
              ghLink="https://github.com/HadeerMagdy17/IMDB-next-app"
              // demoLink="https://hadeer-magdy-quran-app.netlify.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor1}
              isBlog={false}
              title="Cocktails"
              description="Cocktails is build with react.js,show all cocktails you can search about any cocktail you need ,there is 
              details for each cocktail,and this website is fully responsive."
              ghLink="https://github.com/hadeerMSN/14-cocktails"
              demoLink="https://cocktails-react-12e567.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
