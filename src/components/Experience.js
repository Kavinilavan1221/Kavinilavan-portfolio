import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility partialVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Work Experience</h2>
                                    <div className={isVisible ? "animate__animated animate__slideInUp experience-bx" : "experience-bx"}>

                                        <div className="exp-item">
                                            <div className="exp-header">
                                                <h3>Intern - Software Engineer</h3>
                                                <h4>Sri Lanka Telecom</h4>
                                                <span className="exp-date">2024 (OCT) - 2025 (MAR)</span>
                                            </div>
                                            <p>During my internship at Sri Lanka Telecom, I contributed to two key projects: The Incident Management System and The Inventory Management System. My role involved UI/UX design in Figma, frontend development using React, and backend implementation with Spring Boot. I focused on creating user-friendly interfaces and ensuring seamless functionality across both systems, gaining hands-on experience in full-stack development within a professional environment.</p>
                                        </div>

                                        <hr style={{ borderColor: 'rgba(255,255,255,0.1)', margin: '40px 0' }} />

                                        <div className="exp-item">
                                            <div className="exp-header">
                                                <h3>Digital Marketing Executive</h3>
                                                <h4>Riviera Group (PVT) LTD</h4>
                                                <span className="exp-date">2024 (OCT) - 2024 (DEC)</span>
                                            </div>
                                            <p>As a Digital Marketing Executive at Reviera Group Pvt Ltd, I manage online marketing strategies, create and execute social media campaigns, and develop engaging content to enhance brand visibility. My role involves optimizing digital presence, analyzing marketing performance, and implementing effective strategies to drive customer engagement and business growth.</p>
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
