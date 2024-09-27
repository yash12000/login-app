import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check credentials
    if (username === "user" && password === "password") {
      setMessage("Welcome, user!");
      setIsLoggedIn(true);
    } else {
      setMessage("Invalid username or password");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login Page</h1>

      {/* Display the message after login or if invalid credentials */}
      <p>{message}</p>

      {/* Only show the form if the user is not logged in */}
      {!isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "150px" }}
              placeholder="username"
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginRight: "10px" }}>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "150px" }}
              placeholder="password"
              required
            />
          </div>
          <button type="submit" style={{ padding: "5px 15px" }}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default LoginPage;
