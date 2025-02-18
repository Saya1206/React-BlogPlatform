import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import "../styles/auth.css";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignup, setIsSignup] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Account created successfully!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in successfully!");
        navigate("/home");
      }
      setEmail("");
      setPassword("");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Signed in with Google!");
      navigate("/home");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="auth-container my-5">
      <div className="form-box">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            required
          />
          <button type="submit">{isSignup ? "Sign Up" : "Login"}</button>
        </form>
        <button className="google-btn" onClick={handleGoogleSignIn}>
          <img src="../google.png" alt="" className="google-icon" />
          {isSignup ? "Sign Up with Google" : "Login with Google"}
        </button>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login here" : "Sign up here"}
          </span>
        </p>
      </div>
    </div>
  );
}
