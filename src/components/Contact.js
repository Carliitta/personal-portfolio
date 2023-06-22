import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/vector.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import {env} from "../env";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
export const Contact = () => {
  const formInitialDetails = {
    nombre: '',
    correo: '',
    mensaje: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();
   
    if(!formDetails.nombre.length || !formDetails.correo.length || !formDetails.mensaje.length){
      swal({
        text: "Debe rellenar los campos",
        icon: "error",
      })
    }else{
      setButtonText("Enviando..")
      emailjs.sendForm(env.SERVICE_ID, env.TEMPLATE_ID, form.current, env.PUBLIC_KEY)
        .then((result) => {
          swal({
            
            text: "Mensaje enviado con exito",
            icon: "success",
          })
          setButtonText("Enviar"); // Restaurar el texto del botón a "Enviar"
        }, (error) => {
          swal({
            text: "ocurrio un error inesperado",
            icon: "error",
          })
        });
      setFormDetails(formInitialDetails)

    }
  };
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Enviame un Mensaje</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="nombre" value={formDetails.nombre} placeholder="Nombre" onChange={(e) => onFormUpdate('nombre', e.target.value)} />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="correo" value={formDetails.correo} placeholder="Correo" onChange={(e) => onFormUpdate('correo', e.target.value)} />
                      </Col>

                      <Col size={12} className="px-1">
                        <textarea rows="6" name="mensaje" value={formDetails.mensaje} placeholder="Mensaje" onChange={(e) => onFormUpdate('mensaje', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
};
