import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:7000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("user", JSON.stringify(data.user));
      // Redirect based on platform
      navigate(data.user.platformOrigin === "Amazon" ? "/amazon/home" : "/");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Sign-In</h2>
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="amazon-btn">Continue</button>
        <p>By continuing, you agree to Amazon's Conditions of Use.</p>
        <button onClick={() => navigate("/signup")} className="create-account-btn">
          Create your Amazon account
        </button>
      </form>
    </div>
  );
}