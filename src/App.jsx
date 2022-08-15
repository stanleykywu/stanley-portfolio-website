import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import Blog from './pages/blog/Blog';
import Layout from './pages/layout';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App