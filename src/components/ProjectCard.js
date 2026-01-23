import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, hidePermanentTitle }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        {!hidePermanentTitle && (
          <div className="proj-permanent-title">
            <h4>{title}</h4>
          </div>
        )}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
