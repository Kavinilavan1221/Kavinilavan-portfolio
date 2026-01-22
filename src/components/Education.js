import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Education = () => {
    return (
        <section className="education" id="education">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Education</h2>
                                    <div className={isVisible ? "animate__animated animate__slideInUp education-bx" : "education-bx"}>
                                        <div className="edu-item">
                                            <h4>2022(Oct) - Current</h4>
                                            <h3>SLIIT - FACULTY OF COMPUTING</h3>
                                            <p>Completed Higher National Diploma (HND)</p>
                                            <p>Reading BSc (Hons) in Information Technology Specializing in Information Technology (Oct 2022 - Present)</p>
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
