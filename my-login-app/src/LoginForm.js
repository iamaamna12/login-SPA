import React, { useState } from "react";
import "./LoginForm.css";
import { mockFetch } from "./mockFetch";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {
      const response = await mockFetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setMessage("✅ Login successful!");
      } else {
        setMessage("❌ Invalid email or password.");
      }
    } catch (err) {
      setMessage("⚠️ Something went wrong. Try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form" aria-label="Login Form">
      <h1>Login</h1>

      <label htmlFor="email">Email address</label>
      <input
        id="email"
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-describedby="emailHelp"
      />
      <small id="emailHelp">We'll never share your email.</small>

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        name="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Sign In</button>

      {message && <div role="alert" className="message">{message}</div>}
    </form>
  );
};

export default LoginForm;
