import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import cv from "../assets/doc/cv-Rodriguez-Carla-2023.pdf"
import{FaLinkedin,FaGithub} from 'react-icons/fa';
import {HiDocument} from 'react-icons/hi';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#Inicio" className={activeLink === 'Inicio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Inicio')}>Inicio</Nav.Link>
              <Nav.Link href="#Habilidades" className={activeLink === 'Habilidades' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Habilidades')}>Habilidades</Nav.Link>
              <Nav.Link href="#Proyectos" className={activeLink === 'Proyectos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Proyectos')}>Proyectos</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/carla-yamila-rodriguez/" target="_blank"><FaLinkedin style={{color:'white', fontSize:'20px'}}/></a>
                <a href="https://github.com/Carliitta" target="_blank"><FaGithub style={{color:'white', fontSize:'20px'}}/></a>
                <a href={cv} target="_blank"><HiDocument title="cv" style={{color:'white', fontSize:'20px'}}/></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Contactar</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
