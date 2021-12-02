import React from "react";
import { Link } from "react-router-dom";

export default function TheHeader() {
  return (
    <header className="flex items-center justify-between p-4 bg-green-300 text-gray-600 lg:px-16">
      <div>
        <h1 className="font-bold text-2xl">Test-ReactJS</h1>
        <span>Yoga Prasetya</span>
      </div>
      
      <nav className="flex gap-8 text-lg">
        <Link to="/" className="transition-colors hover:text-black">Home</Link>
        <Link to="/genres" className="transition-colors hover:text-black">Genres</Link>
        <Link to="/movies" className="transition-colors hover:text-black">Movies</Link>
      </nav>
    </header>
  );
}
