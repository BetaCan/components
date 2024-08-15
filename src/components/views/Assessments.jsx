import "./Assessments.scss";
import { CardContainer } from "../UI/Card.jsx";

import AssessmentCard from "../entity/assessments/AssessmentCard.jsx";
import useLoad from "../api/useLoad.js";
import { useParams } from "react-router-dom";

function Assessments({}) {
  // State -------------
  const { moduleID } = useParams();
  console.log(`Assessments: moduleID (params from url) is ${moduleID}`);
  const assessmentEndpoint = `/assessments/module/${moduleID}`;
  const [assessments, , loadingMessage] = useLoad(assessmentEndpoint);

  // Handlers --------------------------------------------------------------
  // View ------------------------------------------------------------------
  return (
    <>
      {!assessments ? (
        <p>{loadingMessage}</p>
      ) : assessments.length === 0 ? (
        <p>No Records Found.</p>
      ) : (
        <>
          <h1>{assessments[0].AssessmentModuleName}</h1>
          <CardContainer>
            {assessments.map((assessment) => (
              <AssessmentCard
                assessment={assessment}
                key={assessment.AssessmentID}
              />
            ))}
          </CardContainer>
        </>
      )}
    </>
  );
}

export default Assessments;
