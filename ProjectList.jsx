import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, deleteProject }) {
  if (projects.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No projects yet. Add one above ✨
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          deleteProject={deleteProject}
        />
      ))}
    </div>
  );
}

export default ProjectList;
