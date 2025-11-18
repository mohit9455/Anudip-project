import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const CourseMgt = () => {
  const [arr, setArr] = useState([]);

  return (
    <div>
      <h2>Course Management</h2>

      <nav
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
          padding: "10px",
          background: "#f0f0f0",
          borderRadius: "8px",
        }}
      >
        <Link to="CR">Register Course</Link>
        <Link to="Clist">Course List</Link>
        <Link to="Cdetails">Course Details</Link>
        <Link to="Cdelete">Delete Course</Link>
      </nav>

      {/* Outlet sends arr + setArr to nested components */}
      <Outlet context={{ arr, setArr }} />
    </div>
  );
};

export default CourseMgt;
