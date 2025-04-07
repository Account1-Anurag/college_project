import React, { useState } from "react";
import '../styles/ProblemBar.css'
import { useNavigate } from "react-router-dom";
import { SuggestionPopup } from '../components/SuggestionPopup';
import { Upload } from "lucide-react";
import { UploadPopup } from "./UploadPopup";

export const ProblemBar = ({ problem }) => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [showSol, setShowSol] = useState(false);

  function handleClick() {
    navigate(`/description/${problem.id}`); // Go to detail page
  }

  return (
    <div className="bottom">
      <div className="statement">
        <p onClick={handleClick}> {problem.title}</p>
        <div className="btn-bottom">
          <button onClick={() => setShowPopup(true)}>Suggest</button>
          <button onClick={() => setShowSol(true)}>Project</button>
        </div>
        {showPopup && <SuggestionPopup onClose={() => setShowPopup(false)} />}
        {showSol && <UploadPopup onClose={() => setShowSol(false)} />}
      </div>
    </div>
  );
};
