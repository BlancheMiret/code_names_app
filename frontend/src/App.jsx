import { useState } from 'react'
import './App.css'
import MainForm from './MainForm'

function App() {

  const fetchCodeName = async () => {
    const response = await fetch("http://127.0.0.1:5000/get_code_name")
    const data = await response.json()
    console.log(data.codeName)
  }

  return <MainForm/>
}

export default App
