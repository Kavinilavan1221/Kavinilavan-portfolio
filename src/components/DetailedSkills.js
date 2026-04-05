import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const DetailedSkills = () => {
    const technicalSkills = [
        { category: "Programming Languages", skills: ["Java", "C++", "JavaScript", "SQL", "PHP", "C", "HTML", "CSS", "Python"] },
        { category: "Web Technologies", skills: ["HTML", "CSS", "XML", "React", "Node.js", "Express.js"] },
        { category: "Database Management", skills: ["MySQL", "SQL Server", "MongoDB"] },
        { category: "Design Tools", skills: ["Figma", "Adobe Photoshop", "Canva"] },
        { category: "Version Control", skills: ["Git", "GitHub"] },
        { category: "Automation & Testing", skills: ["Postman", "Selenium"] },
        { category: "Office Suites", skills: ["Microsoft Office", "Google Workspace"] }
    ];

    const softSkills = [
        "Project Management", "Teamwork", "Time Management", "Leadership",
        "Effective Communication", "Critical Thinking", "Problem Solving",
        "Documentation", "Creativity"
    ];

    return (
        <section className="detailed-skill" id="detailed-skills">
            <Container>
                <Row>
                    <Col size={12}>
                        <div className="detailed-skill-bx">
                            <h2>Detailed Expertise</h2>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <Row className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                                        <Col md={6} className="tech-skills-col">
                                            <h3>Technical Skills</h3>
                                            {technicalSkills.map((tech, index) => (
                                                <div key={index} className="tech-category">
                                                    <h4>{tech.category}</h4>
                                                    <p>{tech.skills.join(", ")}</p>
                                                </div>
                                            ))}
                                        </Col>
                                        <Col md={6} className="soft-skills-col">
                                            <h3>Soft Skills</h3>
                                            <div className="soft-skills-list">
                                                {softSkills.map((skill, index) => (
                                                    <span key={index} className="soft-skill-tag">{skill}</span>
                                                ))}
                                            </div>
                                        </Col>
                                    </Row>
                                }
                            </TrackVisibility>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
