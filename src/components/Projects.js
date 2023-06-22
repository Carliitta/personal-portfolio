import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/phoneZone.png";
import projImg2 from "../assets/img/countries.png";
import projImg3 from "../assets/img/todo.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "PhoneZone",
      description: "Ecommerce de Celulares realizado en equipo. FrontEnd: React-Redux-Javascript-Tailwind. Backend: Node-Express-PostgreSQL",
      imgUrl: projImg1,
      Links: [
        {
          type: "deploy",
          url: "https://front-phone-zone.vercel.app/",
          code: "https://github.com/jooseariias/Mobil-Store",
        },
      ],
    },
    {
      title: "Countries App",
      description: "Proyecto Individual realizado en el bootcamp de Henry. FrontEnd: React-Redux-Javascript-CSS. Backend: Node-Express-PostgreSQL",
      imgUrl: projImg2,
      Links: [
        {
          type: "deploy",
          url: "https://countries-pi-web.netlify.app/",
          code: "https://github.com/Carliitta/PI-countries2022",
        },
      ],
    },
    {
      title: "Todo List",
      description: "Con esta aplicación, los usuarios pueden crear y eliminar tareas de una lista organizada. Tecnologias:React-TypeScript-Tailwind",
      imgUrl: projImg3,
      Links: [
        {
          type: "deploy",
          url: "https://lista-quehaceres-typescript.netlify.app/",
          code: "https://github.com/Carliitta/taks-app-typeScript",
        },
      ],
    },
   
  ];

  return (
    <section className="project" id="Proyectos">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Proyectos</h2>
                <p>Durante mi trayectoria profesional, he realizado diversos proyectos que han desafiado mis habilidades y me han permitido crecer como profesional. Algunos de los proyectos en los que he trabajado incluyen:</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                 
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                 
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
