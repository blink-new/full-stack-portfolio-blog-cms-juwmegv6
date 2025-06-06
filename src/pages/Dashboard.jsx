import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';

function DashboardHome() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">CMS Dashboard</h2>
      <p>Welcome to the CMS Dashboard. Use the sidebar to manage your content.</p>
    </div>
  );
}

function DashboardProjects() {
  return <div className="p-8">Manage Projects (CRUD UI coming soon)</div>;
}

function DashboardBlog() {
  return <div className="p-8">Manage Blog Posts (CRUD UI coming soon)</div>;
}

function DashboardSidebar() {
  return (
    <nav className="w-64 bg-card border-r border-border min-h-screen p-4">
      <h3 className="text-xl font-semibold mb-6">Dashboard</h3>
      <ul className="space-y-4">
        <li>
          <Link to="." className="text-primary font-medium hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="projects" className="hover:underline">
            Projects
          </Link>
        </li>
        <li>
          <Link to="blog" className="hover:underline">
            Blog Posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar />
      <div className="flex-1 bg-background">
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="projects" element={<DashboardProjects />} />
          <Route path="blog" element={<DashboardBlog />} />
        </Routes>
      </div>
    </div>
  );
}
