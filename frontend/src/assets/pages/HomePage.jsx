import React from "react";
import { NavBar } from "../components/NavBar";
import { Plus } from "lucide-react";
import "../styles/HomePage.css";
import { ProblemBar } from "../components/ProblemBar";
import {useNavigate } from "react-router-dom"


export const HomePage = () => {

   const navigate= useNavigate()

   function handleClick(){
      navigate("/addProblem")
   }

  return (
    <div>
      <NavBar />
      <div className="home">
        <div className="top">
          <button onClick={handleClick}>
            <span>
              <Plus size={20} />
            </span>
            Add Problem
          </button>
        </div>
        <ProblemBar/>
        <ProblemBar/>
        <ProblemBar/>
        <ProblemBar/>
      </div>
    </div>
  );
};
