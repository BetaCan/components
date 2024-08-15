import "./Modules.scss";
import { CardContainer } from "../UI/Card.jsx";

import ModuleCard from "../entity/modules/ModuleCard.jsx";
import useLoad from "../api/useLoad.js";

function Modules({}) {
  // State -------------
  const USERID = 820; // change this
  const modulesEndpoint = `/modules/leader/${USERID}`;
  const [modules, , loadingMessage] = useLoad(modulesEndpoint);

  // Handlers --------------------------------------------------------------
  // View ------------------------------------------------------------------
  return (
    <>
      <h1>My Modules</h1>

      {!modules ? (
        <p>{loadingMessage}</p>
      ) : modules.length === 0 ? (
        <p>No Records Found.</p>
      ) : (
        <>
          <CardContainer>
            {modules.map((module) => (
              <ModuleCard module={module} key={module.ModuleID} />
            ))}
          </CardContainer>
        </>
      )}
    </>
  );
}

export default Modules;
