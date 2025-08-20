import React from "react";

function Header() {
  return (
    <header className="bg-slate-800 text-white p-6 rounded-xl shadow-md mb-6 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold">StarkReports</h1>
      <p className="mt-2 text-sm text-gray-300">
        Made with <span className="text-pink-400">💡</span> by STARKS
      </p>
    </header>
  );
}

export default Header;
