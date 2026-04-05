import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import dogSkinImg from "../assets/img/dog-skin.png";
import hotelImg from "../assets/img/hotel.png";
import ecommerceImg from "../assets/img/ecommerce.png";
import smartWatchImg from "../assets/img/smartwatch.png";
import travelImg from "../assets/img/travel.png";
import furnitureImg from "../assets/img/furniture.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Dogs Skin Disease Detection and Treatment Suggestions",
      description: "Research using CNN (MobileNet V2) & Federated Learning (FedAVG) for disease detection and treatment suggestions.",
      imgUrl: dogSkinImg,
      hidePermanentTitle: true,
    },
    {
      title: "Online Hotel Reservation System",
      description: "Web-based System using HTML, CSS, SQL, JavaScript, PHP. Includes Contact Us, Feedback Form, and Validation.",
      imgUrl: hotelImg,
    },
    {
      title: "Online E-Commerce System",
      description: "Cloth Shopping Web System using Java, MySQL, HTML, CSS. Features Signup, Login, Password Recovery, Validation.",
      imgUrl: ecommerceImg,
    },
    {
      title: "Smart Watch App UI",
      description: "Mobile App UI in Figma. Screens for Signup, Login, Profile, User Onboarding, and Settings.",
      imgUrl: smartWatchImg,
    },
    {
      title: "Online Travel Booking App UI",
      description: "Android Studio Mobile App. Includes Register Page, Login Page, and User Onboarding Screens.",
      imgUrl: travelImg,
    },
    {
      title: "Online Furniture Shop Management",
      description: "MERN Stack System (React, Node, Express, MongoDB). Features Complaint Forms, Admin Dashboard, Reports, Search.",
      imgUrl: furnitureImg,
      hidePermanentTitle: true,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>My passion for technology drives me to explore innovative solutions. From web development to advanced research in AI and mobile applications, these projects represent my journey in mastering new technologies.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Expertise</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Vision</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>My journey in technology is defined by a diverse skill set ranging from Full Stack Web Development to Mobile Application Design. My research in 'Dog Skin Disease Detection' using MobileNet V2 and Federated Learning highlights my ability to integrate AI with practical applications. I am proficient in a wide array of stacks including React, Node.js, Java, and PHP, ensuring that I can adapt to any development environment and deliver high-quality, scalable solutions.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>As an undergraduate at SLIIT, I have honed not just my technical abilities but also my leadership and teamwork skills. I firmly believe that the best solutions come from collaboration. I am currently seeking internship opportunities where I can apply my knowledge in a dynamic IT environment, contribute to impactful projects, and continue my professional growth as a software engineer committed to excellence.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
