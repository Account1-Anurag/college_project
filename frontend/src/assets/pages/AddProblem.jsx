import React from "react";
import { NavBar } from "../components/NavBar";
import '../styles/AddProblem.css'
export const AddProblem = () => {
  function handleSubmit(e){
    e.preventDefault()
    console.log("submitted")

  }
  return (
    <div>
      <NavBar />
      <div className="addP">
        <h1>Add Problem 👇</h1>
        <form onSubmit={(e)=>{handleSubmit(e)}} className="form-add">
          <label htmlFor="Pname">Problem name:</label>
          <input
            type="text"
            id="Pname"
            name="Pname"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
          <label htmlFor="content">Problem:</label>
          <textarea 
          id="content"
          name="content"
          rows={10}
          cols={120}
          required
          />
          
          <label htmlFor="author">Your name:</label>
          <input
            type="text"
            id="author"
            name="author"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
          <button id="btn-add" type="submit">Submit</button>
          {/* <LongContentInput/> */}
        </form>
      </div>
    </div>
  );
};
