import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import { SignUp } from "./pages/SignUp";
import { AuthProvider } from "./context/AuthContext";
import { SignIn } from "./pages/SignIn";
import { UserPage } from "./pages/UserPage";
// import { SideBar } from "./components/SideBar";
// import ErrorNotFound from "./pages/ErrorNotFound";
import { Header } from "./components/Header.jsx";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/userpage" element={<UserPage />} />
          {/* <Route path="/errornotfound" element={<ErrorNotFound />} /> */}
          <Route path="/post/:postId" element={<PostPage />} />
          {/* Add Login and Sign Up Routes here if needed */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
