import React from "react";
import "../styles/SuggestionPopup.css";

export const SuggestionPopup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-box">
        <h2>Write Solution:</h2>
        <form>
          <textarea className="solution-text" placeholder="Enter your solution..." required></textarea>

          <div className="popup-buttons">
            <button id="btn1" type="submit">Submit</button>
            <button id="btn1" type="button" onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
