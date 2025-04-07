import React, { useState } from "react";
import "../styles/UploadPopup.css";

export const UploadPopup = ({ onClose }) => {
  const [solutionId, setSolutionId] = useState("");
  const [linkType, setLinkType] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", { solutionId, linkType, link });
    // TODO: Add your backend upload logic here
    onClose(); // Close the modal after submit
  };

  return (
    <div className="upload-overlay">
      <div className="upload-popup">
        <h2>Upload Your Project</h2>
        <form onSubmit={handleSubmit} className="upload-form">
          <label>Solution ID</label>
          <input
            type="text"
            value={solutionId}
            onChange={(e) => setSolutionId(e.target.value)}
            required
          />

          <label>Select Link Type</label>
          <select
            value={linkType}
            onChange={(e) => setLinkType(e.target.value)}
            required
          >
            <option value="">-- Select --</option>
            <option value="github">GitHub Link</option>
            <option value="video">Video Link</option>
            <option value="drive">Drive Link</option>
          </select>

          {linkType && (
            <>
              <label>Enter {linkType.charAt(0).toUpperCase() + linkType.slice(1)} Link</label>
              <input
                type="url"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder={`Enter your ${linkType} link`}
                required
              />
            </>
          )}

          <div className="upload-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose} className="close-btn">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
