import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Certificates = () => {
  const certificates = [
    {
      title: "Introduction to Selenium",
      issuer: "Simplilearn SkillUp",
      date: "July 2024",
    },
    {
      title: "Introduction to Java",
      issuer: "SoloLearn",
      date: "July 2024",
    },
    {
      title: "OOPs in Java",
      issuer: "Great Learning Academy",
      date: "July 2024",
    },
    {
      title: "Software Development Lifecycle Fundamentals",
      issuer: "Great Learning Academy",
      date: "July 2024",
    },
    {
      title: "Machine Learning Algorithms",
      issuer: "Great Learning Academy",
      date: "July 2024",
    },
    {
      title: "UI / UX for Beginners",
      issuer: "Great Learning Academy",
      date: "July 2024",
    },
    {
      title: "React JS Tutorial",
      issuer: "Great Learning Academy",
      date: "July 2024",
    },
  ];

  return (
    <section className="certificates" id="certificates">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className={isVisible ? "animate__animated animate__slideInUp cert-bx" : "cert-bx"}>
                    <h2>Certificates</h2>
                    <p>Professional certifications obtained for technical and soft skill development.</p>
                    <div className="cert-list">
                      {certificates.map((cert, index) => {
                        return (
                          <a href="https://www.linkedin.com/in/uthayarasa-kavinilavan/" target="_blank" rel="noopener noreferrer" key={index} className="cert-link">
                            <div className="cert-item">
                              <div className="cert-info">
                                <h4>{cert.title}</h4>
                                <span>{cert.issuer}</span>
                              </div>
                              <div className="cert-date">
                                <span>{cert.date}</span>
                              </div>
                            </div>
                          </a>
                        )
                      })}
                    </div>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
