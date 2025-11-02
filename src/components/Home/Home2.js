import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/dow.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Frontend Developer who loves transforming design concepts into engaging, responsive, and accessible web experiences. Over time, I’ve explored modern frontend technologies and discovered my passion for creating clean, interactive,
               and user-focused interfaces that bring ideas to life.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, JavaScript, and React.js{" "}
                </b>
              </i>
              — , with experience using Next.js to build modern, high-performance web applications.
              <br />
              <br />
              My key areas of interest include 
              <i>
                <b className="purple">
                  {" "}
                  responsive web design, UI/UX optimization, and frontend performance enhancement{" "}
                </b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I love building projects with
               modern frameworks like{" "}
              <i>
                <b className="purple">React.js</b> and{" "}
                <b className="purple">Next.js</b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" style={{ borderRadius: "50%" }} alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
