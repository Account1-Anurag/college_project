import React from "react";
import '../styles/ProblemBar.css'
import { useNavigate } from "react-router-dom";
import { SuggestionPopup } from '../components/SuggestionPopup';

export const ProblemBar = () => {
   
  const navigate=useNavigate();

  function handleClick(id){
      navigate("description/1")
  }
  function handleClick2(){
    <SuggestionPopup />
    // navigate("suggest")
}
function handleClick3(){
  navigate("project")
}

  return (
    <div className="bottom">
      <div className="statement">
        <p onClick={handleClick}>• Problem-Statement</p>
        <div className="btn-bottom">
          <button onClick={handleClick2}>Suggest</button>
          <button onClick={handleClick3}>Project</button>
          {/* <SuggestionPopup />
          <SuggestionPopup /> */}
        </div>
        
      </div>
    </div>
  );
};
