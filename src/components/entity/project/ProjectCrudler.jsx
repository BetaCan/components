import { CardContainer } from "../../UI/Card.jsx";
import ProjectCard from "./ProjectCard.jsx";
import useLoad from "../../api/useLoad.js";

function ProjectCrudler({ endpoint }) {
  // State -------------
  const [projects, , loadingMessage] = useLoad(endpoint);

  // Handlers --------------------------------------------------------------
  // View ------------------------------------------------------------------
  return (
    <>
      <h1>Projects</h1>

      {!projects ? (
        <p>{loadingMessage}</p>
      ) : projects.length === 0 ? (
        <p>No Records Found.</p>
      ) : (
        <>
          <CardContainer>
            {projects.map((project) => (
              <ProjectCard project={project} key={project.GroupID} />
            ))}
          </CardContainer>
        </>
      )}
    </>
  );
}

export default ProjectCrudler;
