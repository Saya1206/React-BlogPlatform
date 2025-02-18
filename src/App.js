import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import { CreatePost } from "./components/CreatePost";
import ContactUs from "./components/ContactUs";
import EducationalBlog from "./components/EducationalBlog";
import TravelBlog from "./components/TravelBlog";
import NatureBlog from "./components/NatureBlog";
import SuccessBlog from "./components/SuccessBlog";
import FamilyBlog from "./components/FamilyBlog";
import SportBlog from "./components/SportBlog";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/auth" />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/educational-blog" element={<EducationalBlog />} />
        <Route path="/travel-blog" element={<TravelBlog />} />
        <Route path="/nature-blog" element={<NatureBlog />} />
        <Route path="/success-blog" element={<SuccessBlog />} />
        <Route path="/family-blog" element={<FamilyBlog />} />
        <Route path="/sport-blog" element={<SportBlog />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth" element={user ? <Navigate to="/" /> : <Auth />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}
