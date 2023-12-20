import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/chat.png";
import projImg2 from "../assets/img/todo.png";
import projImg3 from "../assets/img/inmolandia.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [

    {
      title: "Chat react",
      description: "Mi chat es una aplicación de mensajería en tiempo real que permite a los usuarios comunicarse instantáneamente a través de una interfaz de usuario moderna. Tecnologias:React.js-Bootstrap-express-node.js-socket.io",
      imgUrl: projImg1,
      Links: [
        {
          type: "deploy",
          url: "https://chatear.netlify.app/",
          code: "https://github.com/Carliitta/React-socket-chat.git",
        },
      ],
    },
    {
      title: "Inmolandia",
      description: "Descubre el hogar ideal para ti, y publica tus inmuebles gratis!. Tecnologias:React.js-redux-Bootstrap-PostgreSql-express-node.js",
      imgUrl: projImg3,
      Links: [
        {
          type: "deploy",
          url: "https://drive.google.com/file/d/1ZPHR-Q-j45mgCLzLlXayMBQrwwExWD0j/view?usp=drive_link",
          code: "https://github.com/Carliitta/inmobiliaria",
        },
      ],
    },
    {
      title: "Lista de tareas",
      description: "Una aplicación de lista de tareas desarrollada en TypeScript y React, con persistencia de datos utilizando LocalStorage. Gestiona tus quehaceres de manera eficiente con esta aplicación moderna y fácil de usar.",
      imgUrl: projImg2,
      Links: [
        {
          type: "deploy",
          url: "https://lista-quehaceres-typescript.netlify.app/",
          code: "https://github.com/Carliitta/taks-app-typeScript.git",
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
