import React from 'react'

import { Route,Routes } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'

const Nav = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Nav