import { useState, useEffect ,useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/astronauta.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const habilidadesRef = useRef(null);

  const scrollToHabilidades = () => {
    habilidadesRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="banner" id="Inicio">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Bienvenid@ a mi Portfolio</span>
                <h3>{`Hola! soy Carlii`} </h3>
                <h1>Full Stack Web Developer</h1>
                  <p>Apasionada por la programación y el aprendizaje continuo, estoy lista para enfrentar nuevos desafíos y seguir mejorando como profesional en el campo de la programación.</p>
                  <a  href="#Habilidades">Comenzar <ArrowRightCircle size={25} /></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
