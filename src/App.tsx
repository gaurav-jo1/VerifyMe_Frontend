import React from "react";
import { Routes, Route } from "react-router-dom";
import "./styling/App.scss";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import RequireAuth from "./utils/RequireAuth";
import AuthProvider from "./context/AuthContext";
import Card from "./components/Card";
import SignupCard from "./components/SignupCard";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/card" element={<Card />} />
          <Route path="/signupcard" element={<SignupCard />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
