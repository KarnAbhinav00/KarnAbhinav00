import React from "react";

function Header({ search, setSearch }) {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold">
          <span className="text-white">Stark</span>
          <span className="text-blue-400">Reports</span>
        </h1>
        <p className="text-sm text-gray-400">Made With 🧠 by STARKS</p>
      </div>
      <div className="flex gap-2 mt-4 md:mt-0">
        <input
          type="text"
          placeholder="🔍 Search by topic, description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 rounded-lg bg-gray-800 text-gray-200 border border-gray-600 focus:outline-none"
        />
        <button className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600">
          ⬇ Export
        </button>
      </div>
    </header>
  );
}

export default Header;
