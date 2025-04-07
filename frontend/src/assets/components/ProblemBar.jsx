import React, { useState } from "react";
import '../styles/ProblemBar.css'
import { useNavigate } from "react-router-dom";
import { SuggestionPopup } from '../components/SuggestionPopup';
import { Upload } from "lucide-react";
import { UploadPopup } from "./UploadPopup";

export const ProblemBar = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showSol, setShowSol] = useState(false);

  function handleClick(id) {
    navigate("description/1");
  }

  function handleClick2() {
    setShowPopup(true);  // Show the popup
  }

  function handleClick3() {
    setShowSol(true);
  }

  return (
    <div className="bottom">
      <div className="statement">
        <p onClick={handleClick}>• Problem-Statement</p>
        <div className="btn-bottom">
          <button onClick={handleClick2}>Suggest</button>
          <button onClick={handleClick3}>Project</button>
        </div>
        {showPopup && <SuggestionPopup onClose={() => setShowPopup(false)} />}
        {showSol && <UploadPopup onClose={() => setShowSol(false)} />}
      </div>
    </div>
  );
};
