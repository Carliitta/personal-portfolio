import { Container, Row, Col } from "react-bootstrap";
import cv from "../assets/doc/cv-Rodriguez-Carla-2023.pdf"
import{FaLinkedin,FaGithub} from 'react-icons/fa';
import {HiDocument} from 'react-icons/hi';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={7} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/carla-yamila-rodriguez/" target="_blank"><FaLinkedin style={{color:'white', fontSize:'20px'}}/></a>
                <a href="https://github.com/Carliitta" target="_blank"><FaGithub style={{color:'white', fontSize:'20px'}}/></a>
                <a href={cv} target="_blank"><HiDocument title="cv" style={{color:'white', fontSize:'20px'}}/></a>
               
            </div>
            <p >Carla Rodriguez-2023 🇦🇷</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
