import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import makeup from "../../Assets/Projects/makeup.PNG";
import land from "../../Assets/Projects/land.PNG";
import code from "../../Assets/Projects/code.PNG";


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
              imgPath={makeup}
              isBlog={false}
              title="Makeup Website"
              description="Designed and built a fully responsive makeup website using HTML, CSS, and 
JavaScript.The project highlights modern UI/UX design principles, product display 
components, and a mobile-friendly interface."
              ghLink="https://github.com/Marwa-Wardany/makeup-website-NTI.git"
              demoLink="https://makeup-website-nti-git-main-marwa-wardanys-projects.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={land}
              isBlog={false}
              title="Save Your Land"
              description="Built with React, Bootstrap, and i18n Implemented multilingual support using react-i18next, enhancing accessibility for 
global users"
              ghLink="https://github.com/MinaRemon39/Save-your-land.git"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={code}
              isBlog={false}
              title="Waqe2k"
              description="Built a fully responsive UI using Tailwind CSS and Bootstrap components, 
ensuring consistency across desktop, tablet, and mobile."
              ghLink="https://github.com/Marwa-Wardany/my-first-nextjs-app.git"
              demoLink=""              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
