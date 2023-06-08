import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import homeImg from '../assets/img/bao-img.png';

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <div className="home-info">
                <h1>
                    Welcome to my websites!
                </h1>
                <p>
                    I'm a web developer.
                </p>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={homeImg} alt="bao image" className="home-img"/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export { Banner };
