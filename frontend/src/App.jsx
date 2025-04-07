import './App.css'
import { HomePage } from './assets/pages/HomePage'
import { BrowserRouter, Routes, Route } from "react-router"
import { Signup } from './assets/pages/Signup'
import { AddProblem } from './assets/pages/AddProblem'
import { ProblemDescription } from './assets/pages/ProblemDescription'
import { Sugesstion } from './assets/pages/Sugesstion'
import { Login } from './assets/pages/Login'
import { SolutionProject } from './assets/pages/SolutionProject'

function App() {

  return (
    <BrowserRouter>
       <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/signup' element={<Signup/>} />
         <Route path='/addProblem' element={<AddProblem/>} />
         <Route path='/description/:id' element={<ProblemDescription/>} />
         <Route path='/suggest' element={<Sugesstion/>} />
         <Route path='/login' element={<Login/>} />
         <Route path='/project' element={<SolutionProject/>} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
