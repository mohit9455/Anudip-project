import React, { useState } from 'react'

const FacultyProfile = ({ arr }) => {
  const [num, setNum] = useState(0);
  const [faculty, setFaculty] = useState(null);

  function handle() {
    const found = arr.find(i => i.id === Number(num));
    setFaculty(found || null);
  }

  return (
    <>
      <input 
        type="number" 
        value={num} 
        onChange={(e) => setNum(e.target.value)} 
      />
      <button onClick={handle}>Search</button>

      {faculty ? (
        <>
          <h1>{faculty.id}. {faculty.facultyName}</h1>
          <h1>Department: {faculty.department}</h1>
          <h1>Email: {faculty.email}</h1>
          <h1>Qualification: {faculty.qualification}</h1>
          <h1>Phone: {faculty.phone}</h1>
        </>
      ) : (
        <h2>No faculty found</h2>
      )}
    </>
  )
}

export default FacultyProfile;
