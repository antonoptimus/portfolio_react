import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Project = ({ img, title, index }) => {
  return (
    <>
      <Link to={`/project/${index}`}>
        <li className="project">
          <img src={img} alt={title} className="project__image" />
          <h3 className="project__title">{title}</h3>
        </li>
      </Link>
    </>
  );
};

export default Project;
