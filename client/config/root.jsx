import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div> This is React Router v6!</div>} />
        <Route path="/test" element={<div> This is TEST</div>} />
        <Route path="/*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Root
