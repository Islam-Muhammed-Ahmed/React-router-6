import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import About from "./components/About/About";
import Home from "./components/Home/Home";

function App() {
  // const btn = document.querySelector(".fa-arrow__up");
  // window.onscroll = function () {
  //   console.log(btn);
  //   if (this.scrollY >= 100) {
  //     btn.style.display = "block";
  //   } else {
  //     btn.style.display = "none";
  //   }
  //   // this.scrollY >= 100
  //   //   ? btn.classList.add("show")
  //   //   : btn.classList.remove("show");
  // };
  // btn.onclick = function () {
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
      {/* <button className="btn fa-arrow__up">
        {" "}
        <FaArrowUp />{" "}
      </button> */}
    </>
  );
}

export default App;
