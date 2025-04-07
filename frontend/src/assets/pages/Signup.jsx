import React, { useState } from "react";
import "../styles/Login.css"; // Reusing the same external CSS
import { NavBar } from "../components/NavBar";

export const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    enrollment: "",
    branch: "",
    year: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Form Submitted:", formData);
    alert(`Welcome, ${formData.name}! You have signed up successfully.`);
  };

  return (
    <div>
      <NavBar />

      <div className="div">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Sign Up</h2>

          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="enrollment">Enrollment Number:</label>
          <input
            type="text"
            id="enrollment"
            name="enrollment"
            value={formData.enrollment}
            onChange={handleChange}
            required
          />

          <label htmlFor="branch">Branch:</label>
          <select
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            required
          >
            <option value="">Select Branch</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="AU">AU</option>
            <option value="EE">EE</option>
            <option value="ECE">ECE</option>
            <option value="ME">ME</option>
          </select>

          <label htmlFor="year">Year:</label>
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
          >
            <option value="">Select Year</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
