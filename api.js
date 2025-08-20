import axios from "axios";

const API_URL = "http://localhost:5000/api/projects"; // backend ka route

export const fetchProjects = () => axios.get(API_URL);
export const createProject = (project) => axios.post(API_URL, project);
export const updateProject = (id, updates) => axios.put(`${API_URL}/${id}`, updates);
export const deleteProject = (id) => axios.delete(`${API_URL}/${id}`);
