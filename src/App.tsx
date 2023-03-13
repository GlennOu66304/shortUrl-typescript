import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, EditPage, NotFound } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/edit" Component={EditPage} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
