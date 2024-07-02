import React, { useState } from "react";
import "./css/CreateAd.css";

export default function Login() {
  const [Phone, setPhonenumber] = useState(null);
  const [Password, setPassword] = useState("");
  const handlePhone = (e) => {
    setPhonenumber(e.target.value);
  };
  const handlePass = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <p id="title">Login</p>
      <div className="Login container">
        <form>
          <div className="form-group">
            <label htmlFor="Phone">Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="PhoneNumber"
              onChange={handlePhone}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={handlePass}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
