import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors,setErrors] = useState({})
  const [toast, setToast] = useState({ visible: false, message: "", type: "" });

  

const validateForm = () => {
  const newErrors = {};
  if (!email.trim()) newErrors.email = "Email is required.";
  if (!password.trim()) newErrors.password = "Password is required.";
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

   const showToast = (message, type = "error") => {
     setToast({ visible: true, message, type });
     setTimeout(
       () => setToast({ visible: false, message: "", type: "" }),
       3000
     );
   };
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const user = JSON.parse(localStorage.getItem("mock_user"));
    if (user && user.email === email && user.password === password) {
      localStorage.setItem("ticketapp_session", "mock_token_123");
      showToast("Login successful!", "success");

    
      setTimeout(() => navigate("/dashboard"), 1000);
    } else {
      showToast("Invalid email or password. Try again.");
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 px-6">
      {toast.visible && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed top-6 right-6 z-9999 px-4 py-3 rounded-md text-white shadow-lg ${
            toast.type === "success" ? "bg-emerald-600" : "bg-rose-500"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center text-slate-800 mb-6">
          Welcome Back
        </h1>

        <form onSubmit={handleLogin} className="space-y-5" >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value) }
            />
            {errors.email && (
              <p className="text-sm text-rose-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="mt-1 w-full border border-slate-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-sm text-rose-500 mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 rounded-md font-medium hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
          >
            Log In
          </button>
        </form>

        <p className="text-sm text-center text-slate-600 mt-6">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-sky-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
