import React, { useEffect, useState } from "react";
import { NavBar } from "../components/NavBar";
import { Plus } from "lucide-react";
import "../styles/HomePage.css";
import { ProblemBar } from "../components/ProblemBar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const HomePage = () => {
  const navigate = useNavigate();
  const [problems, setProblems] = useState([]);

  function handleClick() {
    navigate("/addProblem");
  }

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/rawproblems/");
        setProblems(res.data); // res.data is an array of problems
      } catch (err) {
        console.error("Failed to fetch problems:", err);
      }
    };

    fetchProblems();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="home">
        <div className="top">
          <button onClick={handleClick}>
            <span
              style={{
                background: "none",
                backgroundColor: "transparent",
                padding: 0,
                margin: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Plus size={20} color="white" style={{ background: "none" }} />
            </span>
            Add Problem
          </button>
        </div>

        {/* Render ProblemBar for each problem */}
        {problems.map((problem) => (
          <ProblemBar key={problem.id} problem={problem} />
        ))}
      </div>
    </div>
  );
};
