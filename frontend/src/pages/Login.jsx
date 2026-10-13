import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const enteredUsername = username.trim();

    if (!enteredUsername || !password) {
      setError("Please enter both username and password.");
      return;
    }

    // =========================================================
    // BSP_CART ADMIN LOGIN
    // =========================================================
    const ADMIN_USERNAME = "bsp@123";
    const ADMIN_PASSWORD = "bB1@bbbb";

    if (
      enteredUsername === ADMIN_USERNAME &&
      password === ADMIN_PASSWORD
    ) {
      // Store the same authentication keys used
      // by ProtectedRoute, Navbar, Sidebar and services.
      localStorage.setItem(
        "token",
        "admin-token-" + Date.now()
      );

      localStorage.setItem("role", "ADMIN");
      localStorage.setItem("userId", ADMIN_USERNAME);
      localStorage.setItem("name", "BSP CART Admin");
      localStorage.setItem("username", ADMIN_USERNAME);

      // Send admin to admin dashboard.
      navigate("/admin/dashboard");
      return;
    }

    // =========================================================
    // NORMAL USER LOGIN
    // =========================================================

    // Prototype authentication:
    // Users registered through Register.jsx are stored here.
    const users = JSON.parse(
      localStorage.getItem("bsp_users") || "[]"
    );

    const match = users.find(
      (u) =>
        u.username === enteredUsername &&
        u.password === password
    );

    if (!match) {
      setError("Invalid username or password.");
      return;
    }

    // Convert role to uppercase so it matches
    // ProtectedRoute and AppRoutes checks.
    const role = (
      match.role || "buyer"
    ).toUpperCase();

    // Store authentication information.
    localStorage.setItem(
      "token",
      "mock-token-" + Date.now()
    );

    localStorage.setItem("role", role);
    localStorage.setItem("userId", enteredUsername);
    localStorage.setItem(
      "name",
      match.name || enteredUsername
    );
    localStorage.setItem(
      "username",
      enteredUsername
    );

    // =========================================================
    // ROLE-BASED REDIRECT
    // =========================================================

    if (role === "SELLER") {
      navigate("/seller/dashboard");
    } else if (role === "ADMIN") {
      navigate("/admin/dashboard");
    } else {
      navigate("/buyer/dashboard");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h1>Welcome to BSP CART</h1>

        <p>Sign in to continue</p>

        <form onSubmit={handleLogin}>

          <label>Username</label>

          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
          />

          {error && (
            <p className="login-error">
              {error}
            </p>
          )}

          <button type="submit">
            Sign In
          </button>

        </form>

        <p className="signup-prompt">
          Don't have an account?{" "}

          <button
            type="button"
            className="link-btn"
            onClick={() =>
              navigate("/register")
            }
          >
            Create account
          </button>

        </p>

      </div>
    </div>
  );
}

export default Login;