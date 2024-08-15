import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./components/views/Home.jsx";
// import Modules from "./components/views/Modules.jsx";
// import Students from "./components/views/Students.jsx";
import Projects from "./components/views/Projects.jsx";
import Login from "./components/views/Login.jsx";
import PageNotFound from "./components/views/PageNotFound.jsx";
import Project from "./components/entity/project/Project.jsx";
import Pie from "./components/Pie/pie.jsx";
import { AuthProvider } from "./components/auth/useAuth.jsx";
import Account from "./components/views/Account.jsx";
import Modules from "./components/views/Modules.jsx";
import Assessments from "./components/views/Assessments.jsx";
import Groups from "./components/views/Groups.jsx";
import Register from "./components/views/Register.jsx";
import Overview from "./components/views/Overview.jsx";

function App() {
  // initialization
  const loggedInUser = "User";

  // State -------------
  // Handlers ----------
  // Helpers -----------
  // View --------------

  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout loggedInUser={loggedInUser}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects/:groupID" element={<Project />} />
            <Route path="/projects/" element={<Projects />} />
            <Route path="/pie/" element={<Pie />} />
            <Route path="/login" element={<Login />} />
            <Route path="/account" element={<Account />} />
            <Route path="/register" element={<Register />} />
            <Route path="/modules" element={<Modules />} />
            <Route path="/assessments/:moduleID" element={<Assessments />} />
            <Route path="/groups/:assessmentID" element={<Groups />} />
            <Route path="/Overview" element={<Overview />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
// <Route path="/students" element={<Students />} />
// <Route path="/modules" element={<Modules />} />
//
//
// <Route path="/projects/:GroupID" element={<Project GroupID={1} />} />
