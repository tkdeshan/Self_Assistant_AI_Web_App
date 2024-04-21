import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import WelcomePage from "./pages/WelcomePage";
import RegisterPage from "./pages/RegisterPage";
import MenuPage from "./pages/MenuPage";
import Chat from "./components/main/Chat";
import Dashboard from "./components/main/Dashboard";
import Editprofile from "./components/main/EditProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/chat" element={<MenuPage page={<Chat />} />} />
        <Route path="/dashboard" element={<MenuPage page={<Dashboard />} />} />
        <Route
          path="/editprofile"
          element={<MenuPage page={<Editprofile />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
