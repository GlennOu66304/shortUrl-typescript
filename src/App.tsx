import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, EditPage, Register, Login, NotFound } from "./pages";

import ProtectedRoute from "./protectedRoute";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/edit"
          element={<ProtectedRoute element={<EditPage />} />}
        />
      </Routes>

    </Router>
  );
}

export default App;
