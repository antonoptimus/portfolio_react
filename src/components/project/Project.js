import React from "react";
import "./style.css";
import project from "../../img/projects/01.jpg";

const Project = ({img, title}) => {
  return (
    <>
      <li className="project">
        <a href="./project-page.html">
          <img src={img} alt={title} className="project__image" />
          <h3 className="project__title">{title}</h3>
        </a>
      </li>
    </>
  );
};

export default Project;
