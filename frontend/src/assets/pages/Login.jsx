// import React, { useState } from "react";
// import "../styles/Login.css";
// import { NavBar } from "../components/NavBar";

// export const Login = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted:", formData);
//     alert(`Welcome, ${formData.name}!`);
//   };

//   return (
//     <div>
//       <NavBar />

//       <div className="div">
//         <form onSubmit={handleSubmit} className="login-form">
//           <h2>Login</h2>

//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />

//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };


import React, { useState } from "react";
import "../styles/Login.css";
import { NavBar } from "../components/NavBar";
import { Link } from "react-router-dom"; // 🔸 Import Link

export const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
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
    console.log("Form Submitted:", formData);
    alert(`Welcome, ${formData.name}!`);
  };

  return (
    <div>
      <NavBar />

      <div className="div">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>Login</h2>

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>

          {/* 🔻 Sign-up link */}
          <p className="signup-text">
            Don’t have an account?{" "}
            <Link to="/signup" className="signup-link">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
