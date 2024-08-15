// import Action from "../UI/Actions.jsx";
// import ModuleForm from "../entity/module/ModuleForm.jsx";
import { useAuth } from '../auth/useAuth.jsx';
import ProjectCrudler from '../entity/project/ProjectCrudler.jsx';

function Projects() {
  // Initialization ------------------------------------------------------
  const { loggedInUser } = useAuth();
  const userProjectsEndPoint = `/groups/users/${loggedInUser.id}`;
  return <ProjectCrudler endpoint={userProjectsEndPoint} />;
}

export default Projects;
