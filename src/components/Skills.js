
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useRef } from 'react';
import colorSharp from "../assets/img/color-sharp.png"

import { FaReact } from "react-icons/fa";
import { SiRedux, SiTypescript, SiExpress, SiJavascript,SiPostman } from "react-icons/si";
import {
  DiCss3,
  DiHtml5,
  DiNodejsSmall,
  DiPostgresql,
  DiMysql,
  DiGitBranch
} from "react-icons/di";
export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="Habilidades" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Tecnologias y Herramientas</h2>
                        <p>Eh trabajado con una variedad de tecnologías y herramientas que me han permitido desarrollar proyectos de manera efectiva. Algunas de las tecnologías y herramientas que manejo incluyen:</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                               <FaReact className="react-icons"/>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                            <SiJavascript className="react-icons"/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                            <DiNodejsSmall className="react-icons"/>
                                <h5>Node</h5>
                            </div>
                            <div className="item">
                            <DiCss3 className="react-icons"/>
                            <h5>CSS</h5>
                            </div>
                            <div className="item">
                            <DiHtml5 className="react-icons"/>
                                <h5>HTMl</h5>
                            </div>
                            <div className="item">
                            <SiRedux className="react-icons"/>
                                <h5>Redux</h5>
                            </div>
                            <div className="item">
                            <DiPostgresql className="react-icons"/>
                                <h5>PostgreSQL</h5>
                            </div>
                            <div className="item">
                            <SiExpress className="react-icons"/>
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                            <SiTypescript className="react-icons"/>
                                <h5>TypeScript</h5>
                            </div>
                            <div className="item">
                            <SiPostman className="react-icons"/>
                                <h5>Postman</h5>
                            </div>
                            <div className="item">
                            <DiGitBranch className="react-icons"/>
                                <h5>Git</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
