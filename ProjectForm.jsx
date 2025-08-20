import { useState } from "react";

function ProjectForm({ onAdd, setSortBy }) {
  const [form, setForm] = useState({
    projectDate: "",
    title: "",
    description: "",
    owner: "",
    startDate: "",
    completeDate: "",
    completed: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({
      projectDate: "",
      title: "",
      description: "",
      owner: "",
      startDate: "",
      completeDate: "",
      completed: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="date"
          name="projectDate"
          value={form.projectDate}
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-700 bg-gray-900 placeholder-gray-400 text-gray-100 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Project Topic"
          className="p-3 rounded-lg border border-gray-700 bg-gray-900 placeholder-gray-400 text-gray-100 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Project Description"
        className="p-3 rounded-lg border border-gray-700 bg-gray-900 placeholder-gray-400 text-gray-100 focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        name="owner"
        value={form.owner}
        onChange={handleChange}
        placeholder="Owner / Team"
        className="p-3 rounded-lg border border-gray-700 bg-gray-900 placeholder-gray-400 text-gray-100 focus:ring-2 focus:ring-blue-500"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="date"
          name="startDate"
          value={form.startDate}
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="date"
          name="completeDate"
          value={form.completeDate}
          onChange={handleChange}
          className="p-3 rounded-lg border border-gray-700 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 justify-between mt-4">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSortBy("createdAt")}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm"
          >
            Sort: Created ↓
          </button>
          <button
            type="button"
            onClick={() => setSortBy("projectDate")}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm"
          >
            Project Date
          </button>
          <button
            type="button"
            onClick={() => setSortBy("startDate")}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm"
          >
            Start Date
          </button>
          <button
            type="button"
            onClick={() => setSortBy("completeDate")}
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-sm"
          >
            Complete Date
          </button>
        </div>
        <button
          type="submit"
          className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-lg text-white font-medium"
        >
          + Add Project
        </button>
      </div>
    </form>
  );
}

export default ProjectForm;
