// import React, { useState } from "react";
// import { ProblemBar } from "../components/ProblemBar";
// import { SolutionBar } from "../components/SolutionBar";
// import { NavBar } from "../components/NavBar";
// import '../styles/ProblemDescription.css';
// import '../styles/Button.css';
// import { ChevronDown } from "lucide-react";

// export const ProblemDescription = () => {

//    const[pName,setPName]=useState("");
//    const[Description,setDescription]=useState("");

//   return (
//     <div>
//       <NavBar />
//       <hr />

//       <div className="description">
//         <h1>Problem Name: {pName}</h1>
//         <br />
//         <h3 id="red">Problem Description</h3>
//         <br></br>
//         <p id="Sol-desc">{Description}</p>
//         <button id="btn">View Suggestion<span ><ChevronDown/></span></button>
//         <div>
//           {/* <ProblemBar/> */}
//           <SolutionBar />
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import { ProblemBar } from "../components/ProblemBar";
import { SolutionBar } from "../components/SolutionBar";
import { NavBar } from "../components/NavBar";
import "../styles/ProblemDescription.css";
import "../styles/Button.css";
import { ChevronDown } from "lucide-react";

export const ProblemDescription = () => {
  const [pName, setPName] = useState("");
  const [Description, setDescription] = useState("");
  const [showSolution, setShowSolution] = useState(false); // toggle state

  const handleToggle = () => {
    setShowSolution(!showSolution);
  };

  return (
    <div>
      <NavBar />
  
      <div className="description">
        <h1>Problem Name: {pName}</h1>
        <br />
        <h3 id="red">Problem Description</h3>
        <br />
        <p id="Sol-desc">{Description}</p>

        <button id="btn" onClick={handleToggle}>
          View Suggestion
          <span style={{ transform: showSolution ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s ease" }}>
            <ChevronDown />
          </span>
        </button>

        {showSolution && (
          <div style={{ marginTop: "20px" }}>
            <SolutionBar />
          </div>
        )}
      </div>
    </div>
  );
};
