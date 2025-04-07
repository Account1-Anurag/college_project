import React from 'react'
import { NavBar } from '../components/NavBar'
import '../styles/SolutionProject.css'

export const SolutionProject = () => {
  return (
    <div>
      <NavBar/>
      <div className='solution'>
        <h1>Idea: 👇</h1>
        <textarea rows={17} className='sol-text' />
      </div>
    </div>
  )
}
