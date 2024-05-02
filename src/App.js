import React from "react";
import { Routes, Route } from "react-router-dom"
import './assets/styles/index.scss';
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Propos from "./components/Propos/Propos";
import Pages from "./components/Pages/Pages";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return(
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/propos" element={<Propos />}/>
          <Route path="/pages/:id" element={<Pages />}/>
          <Route path="*" element={<ErrorPage />}/>
      </Routes>
      <Footer />
    </div>
  ) 
}

export default App