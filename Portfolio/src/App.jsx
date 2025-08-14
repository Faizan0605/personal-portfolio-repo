import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Footer from "./components/Footer"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import React, { useState } from 'react';
function App() {
  
  const [page, setPage] = useState('home');

  

  return (
    <>
      
      {/* <Navbar page={page} setPage={setPage} /> */}
      {page === 'home' && <Landing />}
      {page === 'portfolio' && <Portfolio />}
      {page === 'contact' && <Contact />}
      <Footer/>
    </>
  )
}

export default App
