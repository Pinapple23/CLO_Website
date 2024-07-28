import { useState } from 'react'
import{BrowserRouter, Router, Route,Routes, Link } from 'react-router-dom'
import SignUp from './components/SignUp'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<SignUp/>}></Route>
      </Routes></BrowserRouter>
  )
}

export default App
