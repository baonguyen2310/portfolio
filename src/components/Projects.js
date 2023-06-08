import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import project1 from '../assets/img/project1.png';

const Project = () => {
  return (
    <Card style={{ width: "18rem" }} className="mt-2">
      <Card.Img variant="top" src={project1} />
      <Card.Body>
        <Card.Title>Project 1</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};


const Projects = () => {
  return (
    <section className="projects" id="projects">
        <h1>Projects</h1>
        <p>
            Nulla vitae elit libero, a pharetra augue mollis interdum
            Nulla vitae elit libero, a pharetra augue mollis interdum
            Nulla vitae elit libero, a pharetra augue mollis interdum
            Nulla vitae elit libero, a pharetra augue mollis interdum
        </p>
      <Container>
        <Row className="mx-auto">
          <Col sm={12} md={6} xl={4} >
            <Project />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export { Projects };