import React from "react";
import '../styles/ProblemBar.css'
import { useNavigate } from "react-router-dom";
export const SolutionBar = () => {
  const navigate=useNavigate();
  function handleChange(){
    navigate("/project");
  }
  return (
    <div className="bottom">
      <div className="statement">
        <p>1. Solution By Author Name</p>
        <div className="btn-bottom">
          <button onClick={handleChange}>Read Solution</button>
          {/* <button>Project</button> */}
        </div>
      </div>
    </div>
  );
};
