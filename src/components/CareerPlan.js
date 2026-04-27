import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const CareerPlan = () => {
  return (
    <section className="career-plan" id="career">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className={isVisible ? "animate__animated animate__slideInUp career-bx" : "career-bx"}>
                    <h2>Career Development Plan</h2>
                    <p>My roadmap to becoming a leader in the IT industry, focusing on continuous learning and professional growth.</p>
                    <div className="career-roadmap">
                      <div className="roadmap-item">
                        <h4>Short-term Goals (Next 1-2 years)</h4>
                        <ul>
                          <li>Complete my undergraduate degree at SLIIT with a high GPA.</li>
                          <li>Secure a challenging internship/junior role in Web Development or AI Research.</li>
                          <li>Master modern frontend frameworks like Next.js and Tailwind CSS.</li>
                        </ul>
                      </div>
                      <div className="roadmap-item">
                        <h4>Medium-term Goals (3-5 years)</h4>
                        <ul>
                          <li>Advance to a Senior Developer or Tech Lead position.</li>
                          <li>Contribute to significant open-source projects or publish research in AI.</li>
                          <li>Obtain professional certifications in Cloud Computing (AWS/Azure).</li>
                        </ul>
                      </div>
                      <div className="roadmap-item">
                        <h4>Long-term Goals (5+ years)</h4>
                        <ul>
                          <li>Take on architectural or management roles, leading large-scale technical projects.</li>
                          <li>Stay at the forefront of emerging technologies like Quantum Computing or Advanced Robotics.</li>
                          <li>Mentor junior developers and give back to the tech community.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  )
}
