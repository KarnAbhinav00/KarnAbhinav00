import { useState, useEffect } from "react";
import { fetchProjects, createProject, updateProject, deleteProject } from "./api";
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectCard from "./components/ProjectCard";

function App() {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    const { data } = await fetchProjects();
    setProjects(data);
  };

  const handleAdd = async (project) => {
    await createProject(project);
    loadProjects();
  };

  const handleToggle = async (id, completed) => {
    await updateProject(id, { completed: !completed });
    loadProjects();
  };

  const handleDelete = async (id) => {
    await deleteProject(id);
    loadProjects();
  };

  const filtered = projects
    .filter((p) =>
      [p.title, p.description, p.owner].some((field) =>
        field?.toLowerCase().includes(search.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (sortBy === "startDate") return new Date(a.startDate) - new Date(b.startDate);
      if (sortBy === "completeDate") return new Date(a.completeDate) - new Date(b.completeDate);
      if (sortBy === "projectDate") return new Date(a.projectDate) - new Date(b.projectDate);
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      {/* Header */}
      <Header search={search} setSearch={setSearch} />

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Project Form */}
        <div className="bg-gray-800/70 backdrop-blur rounded-2xl shadow-lg p-6 mb-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-3xl">➕</span> Add a Project
          </h2>
          <ProjectForm onAdd={handleAdd} setSortBy={setSortBy} />
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-xl font-semibold mb-6">📂 Projects</h2>
          {filtered.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProjectCard
                  key={p._id}
                  project={p}
                  onToggle={handleToggle}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400 mt-10">
              No projects yet. Add one above ✨
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
