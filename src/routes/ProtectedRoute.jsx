import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = !!localStorage.getItem("ticketapp_session");
  const location = useLocation();

  if (!isAuthenticated) {
    localStorage.setItem(
      "auth_message",
      "Your session has expired — please log in again."
    );
    localStorage.setItem("auth_redirect", location.pathname || "/dashboard");
    return <Navigate to="/auth/login" replace />;
  }

  return children;
}
