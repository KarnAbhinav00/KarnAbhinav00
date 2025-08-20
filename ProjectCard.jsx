import React from "react";

function ProjectCard({ project, deleteProject }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition mb-4">
      <h3 className="text-lg font-semibold">{project.topic}</h3>
      <p className="text-sm text-gray-600">{project.description}</p>

      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-sm">
        <p><span className="font-semibold">Owner:</span> {project.owner}</p>
        <p><span className="font-semibold">Start:</span> {project.startDate}</p>
        <p><span className="font-semibold">End:</span> {project.completeDate}</p>
      </div>

      <div className="mt-3 flex gap-2">
        <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-lg">
          Edit
        </button>
        <button
          onClick={() => deleteProject(project.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
