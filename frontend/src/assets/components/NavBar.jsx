import React, { useState } from "react";
import "../styles/NavBar.css";
import logo from "../Image/logo.jpg";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()


  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleClick2() {
    navigate("/")
  }

  function handleLogin() {
    navigate("/login")
  }

  return (
    <div>
      <div className="Nav">
        <div className="left-nav" onClick={handleClick2}>
          <img src={logo} alt="logo" />
          <p id="logo-name">Sankat Mochan</p>
        </div>
        <div className="right-nav">
          <div className="dropdown-container">
            <button onClick={handleClick} id="nav-button">
              Categories
              <span
                style={{
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "0.3s ease",
                  background: "none",
                  backgroundColor: "transparent",
                  padding: "0", // remove padding if any
                  margin: "0",  // remove margin if any
                  display: "flex", // center icon vertically if needed
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <ChevronDown size={20} color="white" style={{ background: "none" }} />
              </span>

            </button>

            {isOpen && (
              <div className="dropdown-op">
                <button>Hardware</button>
                <button>Software</button>
              </div>
            )}
          </div>
          <button id="nav-button" onClick={handleLogin}>Login</button>
        </div>
      </div>
      <hr />
    </div>
  );
};
