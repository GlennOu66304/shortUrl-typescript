import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import { HomePage, EditPage, Register, Login, NotFound } from "./pages";
// import ProtectedRoute from './protectedRoute';
import {
  setAuthentication
} from "./reduex/index";
import { useSelector, useDispatch } from "react-redux";

// const PrivateRoute = ({ children }) => {
//   var isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   // const Navigate = useNavigate()
//   return isAuthenticated ? children : <Navigate to="/login" />
// };

const PrivateRoute = () => {
  const dispatch = useDispatch()
  var isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = localStorage.getItem('token');
  // Set initial authentication state

  if (token) {
    dispatch(setAuthentication(true));
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
};

function App() {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch()

  useEffect(() => {
    // Retrieve token from local storage
    const token = localStorage.getItem('token');
    // Set initial authentication state

    if (token) {
      dispatch(setAuthentication(true));
    }
  });


  return (
    <Router>
      <Routes>

        <Route path="/edit" element={<PrivateRoute />}>
          <Route path="/edit" element={<EditPage />} />
        </Route>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />




      </Routes>

    </Router>
  );
}

export default App;
