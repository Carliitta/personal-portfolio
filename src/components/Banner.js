import { useState, useEffect ,useRef} from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/luna.png";
import headerImg2 from "../assets/img/media.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import {BiDownload} from "react-icons/bi"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import cv from "../assets/doc/cv-Rodriguez-Carla-2023sf.pdf"
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
                  <p>Apasionada de la programación y el universo ✨, estoy preparada para abrazar nuevos desafíos y continuar mi crecimiento como profesional.</p>
                  <a className="cv" href={cv} target="_blank" rel="noopener noreferrer" download> Descargar Cv <BiDownload size={25} /></a>
            {/*       <a  href="#Habilidades">Comenzar <ArrowRightCircle size={25} /></a> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" className="original-img"/>
                  <img src={headerImg2} alt="Media Luna" className="media-luna-img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
