import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CourseRegistration from './course-management/CourseRegistration';
import CourseList from './course-management/CourseList';
import CourseDetails from './course-management/CourseDetails';
import DeleteCourse from './course-management/DeleteCourse';
const App = () => {
  const [arr, setArr] = useState([]);

  return (
    <BrowserRouter>
      <nav
  style={{
    display: "flex",
    gap: "15px",
    marginBottom: "25px",
    padding: "12px 20px",
    background: "#0275d8",
    borderRadius: "8px",
  }}
>
  <Link
    to="/"
    style={{
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
      padding: "8px 14px",
      borderRadius: "6px",
      transition: "0.2s",
    }}
    onMouseOver={(e) => (e.target.style.background = "#025aa5")}
    onMouseOut={(e) => (e.target.style.background = "transparent")}
  >
    Register Course
  </Link>

  <Link
    to="/list"
    style={{
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
      padding: "8px 14px",
      borderRadius: "6px",
      transition: "0.2s",
    }}
    onMouseOver={(e) => (e.target.style.background = "#025aa5")}
    onMouseOut={(e) => (e.target.style.background = "transparent")}
  >
    Course List
  </Link>

  <Link
    to="/details"
    style={{
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
      padding: "8px 14px",
      borderRadius: "6px",
      transition: "0.2s",
    }}
    onMouseOver={(e) => (e.target.style.background = "#025aa5")}
    onMouseOut={(e) => (e.target.style.background = "transparent")}
  >
    Course Details
  </Link>

  <Link
    to="/delete"
    style={{
      color: "white",
      textDecoration: "none",
      fontWeight: "bold",
      padding: "8px 14px",
      borderRadius: "6px",
      transition: "0.2s",
    }}
    onMouseOver={(e) => (e.target.style.background = "#025aa5")}
    onMouseOut={(e) => (e.target.style.background = "transparent")}
  >
    Delete Course
  </Link>
</nav>


      <Routes>
        <Route 
          path="/" 
          element={<CourseRegistration setArr={setArr} />} 
        />
        <Route 
          path="/list" 
          element={<CourseList arr={arr} />} 
        />
        <Route 
          path="/details" 
          element={<CourseDetails arr={arr} />} 
        />
        <Route 
          path="/delete" 
          element={<DeleteCourse setArr={setArr} arr={arr} />} 
        />

        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
