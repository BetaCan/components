import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../UI/Card.jsx";
import "./ProjectCard.scss";

function ProjectCard({ project }) {
  const navigate = useNavigate();

  const handleView = () => {
    console.log(`Navigate: Group id is ${project.GroupID}`);
    navigate(`/projects/${project.GroupID}`);
  };

  return (
    <div className="project-card" onClick={handleView}>
      <Card>
      <h2 className="card-title">{project.GroupName}</h2>
        <div className="card-content">
          <p><strong>Module Name:</strong> {project.GroupModuleName}</p>
          <p><strong>Assessment Name:</strong> {project.GroupAssessmentName}</p>
        </div>
      </Card>
    </div>
  );
}

export default ProjectCard;
