import React, { useState } from "react";
import { NavBar } from "../components/NavBar";
import '../styles/AddProblem.css'
import axios from "axios";


export const AddProblem = () => {

  const[author,setAuthor]=useState("")
  const[title,setTitle]=useState("")
  const[description,setDescription]=useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("accessToken"); // if using JWT

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/rawproblems/",
        {
          title,
          description,
          submitted_by: author,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // remove if not using JWT
          },
        }
      );
      console.log({title, description, author})
      console.log("Problem submitted:", response.data);
      // Optionally, reset fields or navigate
      setTitle("");
      setDescription("");
      setAuthor("");
    } catch (error) {
      console.error("Error submitting problem:", error);
    }
  };

  function handleTitle(e){
        setTitle(e.target.value)
  }

  function handleDescription(e){
    setDescription(e.target.value)
  }

  function handleAuthor(e){
    setAuthor(e.target.value)
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
            value={title}
            onChange={(e)=>{handleTitle(e)}}
            required
          />
          <label htmlFor="content">Problem:</label>
          <textarea 
          id="content"
          name="content"
          rows={10}
          cols={120}
          value={description}
          onChange={(e)=>{handleDescription(e)}}
          required
          />
          
          <label htmlFor="author">Your name:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e)=>{handleAuthor(e)}}
            required
          />
          <button id="btn-add" type="submit">Submit</button>
          {/* <LongContentInput/> */}
        </form>
      </div>
    </div>
  );
};
