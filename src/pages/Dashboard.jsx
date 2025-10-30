import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({ total: 0, open: 0, resolved: 0 });
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const tickets = JSON.parse(localStorage.getItem("tickets") || "[]");
      const total = tickets.length;
      const open = tickets.filter((t) => t.status === "open").length;
      const resolved = tickets.filter((t) => t.status === "closed").length;
      setStats({ total, open, resolved });
    } catch (err) {
      console.error("Failed to load tickets:", err);
      setError("Failed to load tickets. Please retry.");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("ticketapp_session");
    navigate("/auth/login");
  };

  return (
    <div className="relative min-h-screen bg-linear-to-b from-sky-50 via-white to-sky-100 overflow-hidden">
      <div
        className="absolute top-20 -left-20 w-64 h-64 bg-sky-200 rounded-full opacity-30 blur-2xl"
        aria-hidden="true"
      ></div>
      <div
        className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-100 rounded-full opacity-40 blur-3xl"
        aria-hidden="true"
      ></div>

      <header className="relative z-10 bg-white/70 backdrop-blur-sm shadow-sm">
        <div className="mx-auto max-w-[1440px] px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-sky-700">
            TicketFlow Dashboard
          </h1>
          <nav className="flex items-center gap-4">
            <Link
              to="/tickets"
              className="text-slate-700 hover:text-sky-600 transition-colors font-medium"
            >
              Manage Tickets
            </Link>
            <button
              onClick={handleLogout}
              className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-600 transition shadow"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-[1440px] px-6 py-16">
        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">
          Dashboard Overview
        </h2>

        {error && (
          <div className="max-w-xl mx-auto mb-6 bg-rose-50 border border-rose-100 text-rose-700 p-3 rounded">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <p className="text-slate-500 mb-2">Total Tickets</p>
            <h3 className="text-4xl font-bold text-slate-800">{stats.total}</h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <p className="text-slate-500 mb-2">Open</p>
            <h3 className="text-4xl font-bold text-emerald-600">
              {stats.open}
            </h3>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition">
            <p className="text-slate-500 mb-2">Resolved</p>
            <h3 className="text-4xl font-bold text-gray-600">
              {stats.resolved}
            </h3>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            to="/tickets"
            className="inline-block bg-sky-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-sky-700 transition"
          >
            Go to Ticket Management →
          </Link>
        </div>
      </main>
    </div>
  );
}
