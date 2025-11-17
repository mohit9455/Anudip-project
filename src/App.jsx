import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import FacultyRegistration from './facultyRegistration';
import FacultyList from './facultyList';
import FacultyProfile from './facultyProfile';
import DeleteFaculty from './DeleteFaculty';

const App = () => {
  const [arr, setArr] = useState([]);

  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <Link to="/">Register</Link>
        <Link to="/list">List</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/delete">Delete</Link>
      </nav>

      <Routes>
        <Route 
          path="/" 
          element={<FacultyRegistration setArr={setArr} />} 
        />

        <Route 
          path="/list" 
          element={<FacultyList arr={arr} />} 
        />

        <Route 
          path="/profile" 
          element={<FacultyProfile arr={arr} />} 
        />

        <Route 
          path="/delete" 
          element={<DeleteFaculty arr={arr} setArr={setArr} />} 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
