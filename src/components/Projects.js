import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import projectImgShopee from "../assets/img/Shopee.png";
import projectImgFacebook from "../assets/img/Facebook.png";
import projectImgYoga from "../assets/img/YogaAI.png";
import projectImgLogic from "../assets/img/Logic.png";
import projectImgWarp from "../assets/img/Warp.png";
import projectImgDFO from "../assets/img/DFO.png";

const Project = (props) => {
  return (
    <Card style={{ width: "18rem" }} className="mt-2">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary" href={props.href}>Go to website</Button>
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
              img={projectImgShopee}
              name="Shopee Clone"
              text="I cut HTML, CSS to make the home page of Shopee. I also code js for validator form."
              href="https://baonguyen2310.github.io/clone-shopee/"
            />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project
              img={projectImgFacebook}
              name="Facebook Clone"
              text="I use Reactjs, Nodejs and MongoDB to build a Social Network(post, infinite scroll, add friends, chat, ...). It's deployed in AWS EC2"
              href=""
            />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project
              img={projectImgYoga}
              name="AI Yoga Instructor"
              text="I build an AI web application as a yoga instructor. I train AI model by Tensorflow and use Text to speech API."
              href="https://vercel-build-ai-yoga-instructor-4os8e6mlg-baonguyen2310.vercel.app/"
            />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project
              img={projectImgLogic}
              name="Digital Logic"
              text="I calculate 2D geometry and draw it on Canvas HTML5 to build an automaticaly draw logic gate web app."
              href="https://baonguyen2310.github.io/kythuatso/"
            />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project
              img={projectImgWarp}
              name="Warp Knitting"
              text="I and a textile engineer use Three.js to build a 3D warp knitting simulator web app."
              href=""
            />
          </Col>
          <Col sm={12} md={6} xl={4}>
            <Project
              img={projectImgDFO}
              name="DFO - Debate Fratenity Organization"
              text="I use a free Stablo Blog Template - Next.js & Sanity CMS to build a website for Tay Ninh Debate Fratenity Organization."
              href="https://dfotayninh.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export { Projects };
