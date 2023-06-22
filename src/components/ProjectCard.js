import { Col } from "react-bootstrap";
import { GoCode } from "react-icons/go";
import { FiExternalLink } from "react-icons/fi";
export const ProjectCard = ({ title, description, imgUrl,Links }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4> 
          <span>{description}</span>
        </div>
      </div>
      {Links.map((link, index) => (
                <a key={index} href={link.url} target="_blank">
                  <FiExternalLink
                    title="deploy"
                    style={{ fontSize: "30px", marginRight: "15px" }}
                  />
                </a>
              ))}
              {Links.map((link, index) => (
                <a key={index} href={link.code} target="_blank">
                  <GoCode title="repositorio" style={{ fontSize: "30px" }} />
                </a>
              ))}
    </Col>
  )
}
