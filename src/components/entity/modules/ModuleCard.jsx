import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../UI/Card.jsx";
import "./ModuleCard.scss";

function ModuleCard({ module }) {
  const navigate = useNavigate();

  const handleView = () => {
    console.log(`Navigate: Module id is ${module.ModuleID}`);
    navigate(`/assessments/${module.ModuleID}`);
  };

  return (
    <div className="module-card" onClick={handleView}>
      <Card>
        <h2 className="card-title">{module.ModuleCode}</h2>
        <div className="card-content">
          <p>
            <strong>Module Name:</strong> {module.ModuleName}
          </p>
          <p>
            <strong>Module Level:</strong> {module.ModuleLevel}
          </p>
        </div>
      </Card>
    </div>
  );
}

export default ModuleCard;
