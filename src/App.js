import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";
import { HomePage, EditPage, Register, Login, NotFound } from "./pages";
// import ProtectedRoute from './protectedRoute';
import {
  setAuthentication
} from "./reduex/slices";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch()
//  const Navigate = useNavigate()

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
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/edit"
          element={isAuthenticated ? <EditPage /> : <Login  />}
        />
      </Routes>

    </Router>
  );
}

export default App;
