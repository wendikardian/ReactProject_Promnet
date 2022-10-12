import React from "react";

const ProjectCard = (props) => {
  const { title, desc, img } = props;
  return (
    <div className="service-item">
      <img src={img} alt="" />
      <h4>
        {title}
      </h4>
      <p>
        {desc}
      </p>
    </div>
  );
};


export default ProjectCard;
