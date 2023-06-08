import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function ContactForm() {
  return (
    <Form>
      <Row className="w-100">
        <Col sm={12} md={6} xl={6}>
          <Form.Group controlId="contactForm.lastName">
            <Form.Label>Last name</Form.Label>
            <Form.Control type="text" placeholder="Last name" />
          </Form.Group>

          <Form.Group controlId="contactForm.firstName">
            <Form.Label>First name</Form.Label>
            <Form.Control type="text" placeholder="First name" />
          </Form.Group>

          <Form.Group controlId="contactForm.email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@email.com" />
          </Form.Group>

          <Form.Group controlId="contactForm.phoneNumber">
            <Form.Label>Phone number</Form.Label>
            <Form.Control type="text" placeholder="Phone Number" />
          </Form.Group>
        </Col>
        <Col sm={12} md={6} xl={6}>
          <Form.Group controlId="contactForm.message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          
          <Button variant="primary" type="submit" className="mt-2">
            Send
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1>Contact</h1>
      <ContactForm />
      <p>Email: 1phe.com@gmail.com</p>
      <p>SDT: 0123456xxx</p>
      <div className="social-media-container">
        <FaFacebookSquare />
        <FaGithubSquare />
        <FaLinkedin />
        <FaTwitterSquare />
      </div>
    </section>
  );
};

export { Contact };
