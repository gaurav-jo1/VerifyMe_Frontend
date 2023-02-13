import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styling/App.scss";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import RequireAuth from "./utils/RequireAuth";

function App() {
  return (

      <div className="App">
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </div>
  );
}

export default App;
