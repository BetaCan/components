import "./Groups.scss";
import { CardContainer } from "../UI/Card.jsx";

import GroupCard from "../entity/groups/GroupCard.jsx";
import useLoad from "../api/useLoad.js";
import { useParams } from "react-router-dom";

function Groups({}) {
  // State -------------
  const { assessmentID } = useParams();
  const groupEndpoint = `/groups/assessment/${assessmentID}`;
  const [groups, , loadingMessage] = useLoad(groupEndpoint);

  // Handlers --------------------------------------------------------------
  // View ------------------------------------------------------------------
  return (
    <>
      {!groups ? (
        <p>{loadingMessage}</p>
      ) : groups.length === 0 ? (
        <p>No Records Found.</p>
      ) : (
        <>
          <h4>{groups[0].GroupModuleName}</h4>
          <h1>{groups[0].GroupAssessmentName}</h1>
          <CardContainer>
            {groups.map((group) => (
              <GroupCard group={group} key={group.GroupID} />
            ))}
          </CardContainer>
        </>
      )}
    </>
  );
}

export default Groups;
