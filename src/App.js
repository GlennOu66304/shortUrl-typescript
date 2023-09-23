import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, EditPage, Register, Login, NotFound, UserUrlList } from "./pages";
import { PrivateRoute } from './privateRouter'
// import { Header } from './component'

function App() {



  return (
    <Router>
      {/* <Header/> */}
      <Routes>

        <Route path="/:userId/shorturllist" element={<PrivateRoute />}>
          <Route path="/:userId/shorturllist" element={<UserUrlList />} />
        </Route>

        {/* <Route path="/:userId/shorturllist" element={<UserUrlList />} /> */}
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
