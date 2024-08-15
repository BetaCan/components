import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../UI/Card.jsx";
import "./GroupCard.scss";

function GroupCard({ group }) {
  const navigate = useNavigate();

  const handleView = () => {
    console.log(`Navigate: Group id is ${group.ModuleID}`);
    navigate(`/projects/${group.GroupID}`);
  };

  return (
    <div className="group-card" onClick={handleView}>
      <Card>
        <h2 className="card-title">{group.GroupName}</h2>
        <div className="card-content">
          <p>Attendance Score: whatever</p>
        </div>
      </Card>
    </div>
  );
}

export default GroupCard;
