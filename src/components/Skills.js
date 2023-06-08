import Carousel from "react-bootstrap/Carousel";
import skillImgReactJS from "../assets/img/reactjs.png";
import skillImgNodeJS from "../assets/img/nodejs.png";
import skillImgMongoDB from "../assets/img/mongodb.png";
import skillImgHtmlCssJs from "../assets/img/htmlcssjs.png";

const Skill = () => {

}

function Skills() {
  return (
    <section className="skills" id="skills">
        <h1>Skills</h1>
        <p>
            Nulla vitae elit libero, a pharetra augue mollis interdum
            Nulla vitae elit libero, a pharetra augue mollis interdum
            Nulla vitae elit libero, a pharetra augue mollis interdum
            Nulla vitae elit libero, a pharetra augue mollis interdum
        </p>
      <Carousel interval={2000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={skillImgReactJS}
            alt="First slide"
          />
          <Carousel.Caption className="caption-skills">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={skillImgNodeJS}
            alt="Second slide"
          />

          <Carousel.Caption className="caption-skills">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={skillImgMongoDB}
            alt="Third slide"
          />

          <Carousel.Caption className="caption-skills">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={skillImgHtmlCssJs}
            alt="Third slide"
          />

          <Carousel.Caption className="caption-skills">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export { Skills };
