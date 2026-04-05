import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import { Envelope, Telephone, GeoAlt } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const form = useRef();

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.phone || !formDetails.message) {
      setStatus({
        success: false,
        message: 'Please fill in all fields before sending.'
      });
      return;
    }

    // Phone number validation: must be exactly 10 digits
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formDetails.phone)) {
      setStatus({
        success: false,
        message: 'Please enter a valid 10-digit phone number.'
      });
      return;
    }

    // Check if EmailJS credentials are provided
    if (!process.env.REACT_APP_EMAILJS_SERVICE_ID || !process.env.REACT_APP_EMAILJS_TEMPLATE_ID || !process.env.REACT_APP_EMAILJS_PUBLIC_KEY) {
      setStatus({
        success: false,
        message: 'System Setup Required: Please add your EmailJS API keys to the .env file. See the walkthrough for instructions.'
      });
      setButtonText("Send");
      return;
    }

    setButtonText("Sending...");

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: 'Message sent successfully' });
      }, (error) => {
        console.log(error.text);
        setButtonText("Send");
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <>
                  <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                  <div className={isVisible ? "animate__animated animate__zoomIn contact-info" : "contact-info"} style={{ marginTop: '30px', color: 'white' }}>
                    <p style={{ fontSize: '18px', marginBottom: '15px' }}><Telephone size={25} style={{ marginRight: '10px' }} /> +94 76 555 3365</p>
                    <p style={{ fontSize: '18px', marginBottom: '15px' }}><Envelope size={25} style={{ marginRight: '10px' }} /> kavin200212@gmail.com</p>
                    <p style={{ fontSize: '18px', marginBottom: '15px' }}><GeoAlt size={25} style={{ marginRight: '10px' }} /> Malabe, Colombo</p>
                  </div>
                </>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="firstName" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="lastName" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="phone"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => {
                            const value = e.target.value.replace(/\D/g, ''); // Only allow digits
                            if (value.length <= 10) {
                              onFormUpdate('phone', value);
                            }
                          }}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        {
                          status.message &&
                          <div style={{ marginBottom: '20px' }}>
                            <p className={status.success === false ? "danger" : "success"} style={{ fontSize: '16px', fontWeight: '500' }}>{status.message}</p>
                          </div>
                        }
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
