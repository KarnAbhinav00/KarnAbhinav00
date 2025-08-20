import React from "react";

function ProjectCard({ project, onToggle, onDelete }) {
  return (
    <div
      className={`p-4 rounded-xl border ${
        project.completed ? "border-green-500 bg-green-900/30" : "border-gray-700 bg-gray-800"
      } shadow`}
    >
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="text-gray-400 text-sm">{project.description}</p>
      <p className="text-gray-500 text-xs mt-1">Owner: {project.owner || "N/A"}</p>
      <div className="flex justify-between mt-3">
        <button
          onClick={() => onToggle(project._id, project.completed)}
          className={`px-3 py-1 rounded-lg text-sm ${
            project.completed ? "bg-green-600 hover:bg-green-500" : "bg-yellow-600 hover:bg-yellow-500"
          }`}
        >
          {project.completed ? "✅ Completed" : "⏳ Mark Done"}
        </button>
        <button
          onClick={() => onDelete(project._id)}
          className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded-lg text-sm"
        >
          ❌ Delete
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
