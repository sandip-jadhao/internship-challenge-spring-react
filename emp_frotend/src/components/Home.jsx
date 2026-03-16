import { useState } from "react";
import EmployeeList from "../components/EmployeeList";
import "../styles/Home.css";

function Home() {

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (loginId === "admin" && password === "admin") {
      setMessage("Login Successful...");
      setAlertType("success");

      setTimeout(() => {
        setMessage("");
        setIsLoggedIn(true);
      }, 2000);
      
    } else {
      setMessage("Invalid login credentials");
      setAlertType("danger");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginId("");
    setPassword("");
  };

  if (isLoggedIn) {
    return <EmployeeList onLogout={handleLogout}/>;
  }

  return (
    
    <div className="home-container">
        <h2>Employee Management System</h2>
      <form className="login-form" onSubmit={handleLogin}>

        <h2 className="login-title">Admin Login</h2>

        {message && <p className={`alert alert-${alertType}`}>{message}</p>}

        <input
          type="text"
          placeholder="Login ID"
          className="login-input"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Home;
