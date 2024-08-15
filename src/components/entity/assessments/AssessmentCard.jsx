import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../UI/Card.jsx";
import "./AssessmentCard.scss";

function AssessmentCard({ assessment }) {
  const navigate = useNavigate();

  const handleView = () => {
    console.log(`Navigate: Assessment id is ${assessment.AssessmentID}`);
    navigate(`/groups/${assessment.AssessmentID}`);
  };

  return (
    <div className="assessment-card" onClick={handleView}>
      <Card>
        <h2 className="card-title">{assessment.AssessmentName}</h2>
        <div className="card-content">
          <p>
            <strong>Assessment Name:</strong> {assessment.AssessmentName}
          </p>
        </div>
      </Card>
    </div>
  );
}

export default AssessmentCard;
