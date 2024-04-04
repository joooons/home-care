// import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Layout from "./Layout"
import HomePage from "./pages//HomePage"
import AltPage from "./pages/AltPage"

import "./App.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<AltPage />} />
          <Route path="/alt" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
