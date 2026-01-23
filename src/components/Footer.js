import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { Logo } from "./Logo";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import WhatsAppIcon from "../assets/img/whatsapp-icon.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <Logo />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/uthayarasa-kavinilavan/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://web.facebook.com/uthayarasa.kavinilavan" target="_blank"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/Kavinilavan1221" target="_blank"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://wa.me/94765553365" target="_blank"><img src={WhatsAppIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2026. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
