import React, { useState } from "react";
import "../styles/SuggestionPopup.css"; // We'll add styles here

export const SuggestionPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [suggestion, setSuggestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Suggestion submitted: ${suggestion}`);
    setSuggestion("");
    setShowPopup(false);
  };

  return (
    <div>
      <button className="open-btn" onClick={() => setShowPopup(true)}>
        Give Suggestion
      </button>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Write Suggestion:</h3>
            <form onSubmit={handleSubmit}>
              <textarea
                rows="6"
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                placeholder="Type your suggestion here..."
                required
              />
              <button type="submit">Submit</button>
              <button type="button" className="close-btn" onClick={() => setShowPopup(false)}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
