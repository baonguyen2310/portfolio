import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import projectImg1 from "../assets/img/project1.png";

const Project = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-2">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary" href={props.href}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h1>Projects</h1>
      <p>
        Nulla vitae elit libero, a pharetra augue mollis interdum Nulla vitae
        elit libero, a pharetra augue mollis interdum Nulla vitae elit libero, a
        pharetra augue mollis interdum Nulla vitae elit libero, a pharetra augue
        mollis interdum
      </p>
      <Container>
        <Row className="mx-auto">
          <Col sm={12} md={6} xl={4}>
            <Project
              img={projectImg1}
              name="AI Yoga Instructor"
              text=" Nulla vitae elit libero, a pharetra augue mollis interdum"
              href="https://vercel-build-ai-yoga-instructor-4os8e6mlg-baonguyen2310.vercel.app/"
            />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project
              img={projectImg1}
              name="AI Yoga Instructor"
              text=" Nulla vitae elit libero, a pharetra augue mollis interdum"
            />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project
              img={projectImg1}
              name="AI Yoga Instructor"
              text=" Nulla vitae elit libero, a pharetra augue mollis interdum"
            />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project
              img={projectImg1}
              name="AI Yoga Instructor"
              text=" Nulla vitae elit libero, a pharetra augue mollis interdum"
            />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project
              img={projectImg1}
              name="AI Yoga Instructor"
              text=" Nulla vitae elit libero, a pharetra augue mollis interdum"
            />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project
              img={projectImg1}
              name="AI Yoga Instructor"
              text=" Nulla vitae elit libero, a pharetra augue mollis interdum"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export { Projects };
