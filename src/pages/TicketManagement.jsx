import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TicketManagement() {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [newTicket, setNewTicket] = useState({
    title: "",
    description: "",
    status: "open",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [toast, setToast] = useState({ visible: false, message: "", type: "" });
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    status: "",
  });

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("tickets")) || [];
    setTickets(stored);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("tickets", JSON.stringify(tickets));
    } catch (err) {
      console.error("Failed to save tickets:", err);
      showToast("Failed to save tickets. Please retry.", "error");
    }
  }, [tickets]);

  const showToast = (message, type = "success") => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast({ visible: false, message: "", type: "" }), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedTicket = { ...newTicket, [name]: value };
    setNewTicket(updatedTicket);

    let newErrors = { ...errors };
    if (name === "title") {
      newErrors.title = !value.trim() ? "Title is required." : "";
    } else if (name === "status") {
      newErrors.status = !["open", "in_progress", "closed"].includes(value)
        ? "Invalid status value."
        : "";
    } else if (name === "description") {
      newErrors.description =
        value.length > 1000
          ? "Description must be less than 1000 characters."
          : "";
    }
    setErrors(newErrors);
  };

  const validateAll = () => {
    let newErrors = { title: "", description: "", status: "" };
    newErrors.title = !newTicket.title.trim() ? "Title is required." : "";
    newErrors.status = !["open", "in_progress", "closed"].includes(
      newTicket.status
    )
      ? "Invalid status value."
      : "";
    newErrors.description =
      newTicket.description.length > 1000
        ? "Description must be less than 1000 characters."
        : "";
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  // Create or Update Ticket
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTicket.title.trim()) {
      showToast("Title is required.", "error");
      return;
    }

    if (!validateAll()) {
      showToast("Please fix the form errors.", "error");
      return;
    }

    if (editIndex !== null) {
      const updated = [...tickets];
      updated[editIndex] = newTicket;
      setTickets(updated);
      setEditIndex(null);
      showToast("Ticket updated successfully!");
    } else {
      setTickets([...tickets, newTicket]);
      showToast("Ticket created successfully!");
    }

    setNewTicket({ title: "", description: "", status: "open" });
    setErrors({ title: "", description: "", status: "" });
  };

  // Edit
  const handleEdit = (index) => {
    setEditIndex(index);
    setNewTicket(tickets[index]);
    setErrors({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Delete
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      const updated = tickets.filter((_, i) => i !== index);
      setTickets(updated);
      showToast("Ticket deleted.", "error");
    }
  };

  
  const statusColor = {
    open: "bg-emerald-100 text-emerald-700",
    in_progress: "bg-amber-100 text-amber-700",
    closed: "bg-gray-200 text-gray-700",
  };

  return (
    <div className="relative min-h-screen bg-linear-to-br from-sky-50 via-white to-sky-100 overflow-hidden">
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-sky-200 rounded-full opacity-30"></div>
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-300 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-100 rounded-full opacity-40 blur-3xl"></div>

      {toast.visible && (
        <div
          className={`fixed top-6 right-6 z-9999 px-5 py-3 rounded-md text-white shadow-lg transition-all ${
            toast.type === "success" ? "bg-emerald-500" : "bg-rose-500"
          }`}
        >
          {toast.message}
        </div>
      )}
      <header className="relative z-10 bg-white/70 backdrop-blur-sm shadow-md">
        <div className="mx-auto max-w-[1440px] px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors font-medium"
            >
              Back to Dashboard
            </button>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-slate-700 hover:text-sky-600 transition-colors font-medium"
            >
              🏠 Home
            </button>
            <h1 className="text-2xl font-bold text-sky-700">
              Ticket Management
            </h1>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto max-w-[1440px] px-6 py-12">
        <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
          Manage Your Tickets
        </h2>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8 mb-10 max-w-2xl mx-auto transition-all hover:shadow-xl"
        >
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="title"
                className="block text-slate-600 font-medium mb-2"
              >
                Title *
              </label>
              <input
                id="title"
                type="text"
                name="title"
                value={newTicket.title}
                onChange={handleChange}
                placeholder="Enter ticket title"
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none transition"
              />
              {errors.title && (
                <p className="text-rose-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            <div>
              <label className="block text-slate-600 font-medium mb-2">
                Status *
              </label>
              <select
                name="status"
                value={newTicket.status}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-500 outline-none transition"
              >
                <option value="open">Open</option>
                <option value="in_progress">In Progress</option>
                <option value="closed">Closed</option>
              </select>
              {errors.status && (
                <p className="text-rose-500 text-sm mt-1">{errors.status}</p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-slate-600 font-medium mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={newTicket.description}
              onChange={handleChange}
              placeholder="Optional: add a description"
              className="w-full border border-slate-300 rounded-md px-3 py-2 h-28 resize-none focus:ring-2 focus:ring-sky-500 outline-none transition"
            ></textarea>
            {errors.description && (
              <p className="text-rose-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-sky-600 text-white py-3 rounded-lg shadow-md hover:bg-sky-700 transition font-semibold"
          >
            {editIndex !== null ? "Update Ticket" : "Create Ticket"}
          </button>
        </form>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.length === 0 && (
            <p className="text-center text-slate-500 col-span-full">
              No tickets yet. Create one above!
            </p>
          )}

          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-slate-800">
                  {ticket.title}
                </h3>
                <span
                  className={`text-xs font-medium px-3 py-1 rounded-full capitalize ${
                    statusColor[ticket.status]
                  }`}
                >
                  {ticket.status.replace("_", " ")}
                </span>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                {ticket.description || "No description provided."}
              </p>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleEdit(index)}
                  className="text-sky-600 font-medium hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-rose-500 font-medium hover:underline"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

