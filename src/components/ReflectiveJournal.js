import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const ReflectiveJournal = () => {
  return (
    <section className="reflective-journal" id="journal">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className={isVisible ? "animate__animated animate__slideInUp journal-bx" : "journal-bx"}>
                    <h2>Reflective Journal</h2>
                    <p>My journey through the Professional Practice Workshop (PPW) has been transformative. Here's a reflection on what I've learned and how it has shaped my professional outlook.</p>
                    <div className="journal-content">
                      <div className="journal-entry">
                        <h3>Key Learnings from PPW</h3>
                        <ul>
                          <li><strong>Professionalism:</strong> Understanding the importance of ethics and conduct in the IT industry.</li>
                          <li><strong>Communication:</strong> Improving verbal and written communication skills for effective team collaboration.</li>
                          <li><strong>Teamwork:</strong> Gaining experience in agile methodologies and group project management.</li>
                          <li><strong>Career Readiness:</strong> Learning how to build a strong professional brand and prepare for the job market.</li>
                        </ul>
                        <p>
                          These sessions have provided me with a solid foundation to transition from an undergraduate student to a professional IT practitioner. The practical insights shared during the workshops have been invaluable in understanding real-world industry expectations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
