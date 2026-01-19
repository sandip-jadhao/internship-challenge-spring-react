import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center"
      style={{
        background: "linear-gradient(180deg, #0f2027, #203a43, #2c5364)",
      }}
    >
      {/* Card */}
      <div
        className="card text-center shadow-lg border-0"
        style={{
          width: "420px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(15px)",
        }}
      >
        <div className="card-body p-5 text-white">
          <h1 className="mb-3 fw-semibold">Welcome</h1>

          <p className="mb-4 text-light opacity-75">
            Secure authentication with modern UI
          </p>

          <div className="d-grid gap-3">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="btn btn-outline-light btn-lg"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
