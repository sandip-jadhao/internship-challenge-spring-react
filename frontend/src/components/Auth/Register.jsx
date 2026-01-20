import React, { useState } from "react";
import api from "../services/api";

function Register() {
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post("/register", user);
        alert("Registration Successful");
    };

    return (
        <div className="container-fluid  vh-100"
        style={{
        background: "linear-gradient(180deg, #0f2027, #203a43, #2c5364)",
        }}>
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="card shadow-lg p-4">
                        <h3 className="text-center mb-4">User Registration</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    onChange={e =>
                                        setUser({ ...user, username: e.target.value })
                                    }
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={e =>
                                        setUser({ ...user, email: e.target.value })
                                    }
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={e =>
                                        setUser({ ...user, password: e.target.value })
                                    }
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Register
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
