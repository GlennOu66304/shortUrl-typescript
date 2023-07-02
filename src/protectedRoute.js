import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ ...props }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    // Render the component if authenticated
    return <Route {...props} />;

  } else {
    // Redirect to login or a fallback page if not authenticated
    return <Navigate to="/login" />;
  }
};
export default ProtectedRoute;
