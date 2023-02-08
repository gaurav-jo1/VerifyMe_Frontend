import React from 'react'
import { Routes, Route } from "react-router-dom"
import './styling/App.scss'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage/> } />
        <Route path="/signup" element={ <SignupPage/> } />
      </Routes>
    </div>
  )
}

export default App
