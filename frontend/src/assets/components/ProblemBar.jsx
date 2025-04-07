// import React from "react";
// import '../styles/ProblemBar.css'
// import { useNavigate } from "react-router-dom";
// import { SuggestionPopup } from '../components/SuggestionPopup';

// export const ProblemBar = () => {
   
//   const navigate=useNavigate();

//   function handleClick(id){
//       navigate("description/1")
//   }
//   function handleClick2(){
//     // navigate("suggest")
// }
// function handleClick3(){
//   navigate("project")
// }

//   return (
//     <div className="bottom">
//       <div className="statement">
//         <p onClick={handleClick}>• Problem-Statement</p>
//         <div className="btn-bottom">
//           <button onClick={handleClick2}>Suggest</button>
//           <button onClick={handleClick3}>Project</button>
//           {/* <SuggestionPopup />
//           <SuggestionPopup /> */}
//         </div>
        
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import '../styles/ProblemBar.css'
import { useNavigate } from "react-router-dom";
import { SuggestionPopup } from '../components/SuggestionPopup';

export const ProblemBar = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  function handleClick(id) {
    navigate("description/1");
  }

  function handleClick2() {
    setShowPopup(true);  // Show the popup
  }

  function handleClick3() {
    // navigate("project");
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
      </div>
    </div>
  );
};
