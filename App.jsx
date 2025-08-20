import React, { useState } from "react";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, { id: Date.now(), ...project }]);
  };

  const deleteProject = (id) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <Header />
        <ProjectForm addProject={addProject} />
        <ProjectList projects={projects} deleteProject={deleteProject} />
      </div>
    </div>
  );
}

export default App;
