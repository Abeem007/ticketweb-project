import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState({ visible: false, message: "", type: "" });

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!password.trim()) newErrors.password = "Password is required.";
    if (password.trim().length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (message, type = "error") => {
    setToast({ visible: true, message, type });
    setTimeout(() => setToast({ visible: false, message: "", type: "" }), 3000);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const existingUser = JSON.parse(localStorage.getItem("mock_user"));
    if (existingUser && existingUser.email === email) {
      showToast("User already exists. Please log in.");
      return;
    }

    const newUser = { email, password };
    localStorage.setItem("mock_user", JSON.stringify(newUser));

    showToast("Signup successful! Redirecting to login...", "success");
    setTimeout(() => navigate("/auth/login"), 1500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 px-6">
      {toast.visible && (
        <div
          className={`fixed top-6 right-6 z-9999 px-4 py-3 rounded-md text-white shadow-lg ${
            toast.type === "success" ? "bg-emerald-600" : "bg-rose-500"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-slate-800 mb-6">
          Create an Account
        </h1>

        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-sm text-rose-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-sm text-rose-500 mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Confirm Password
            </label>
            <input
              type="password"
              className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="text-sm text-rose-500 mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 rounded-md font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-slate-600 mt-6">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-sky-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
