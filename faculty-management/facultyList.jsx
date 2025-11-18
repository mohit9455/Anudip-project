import React from 'react'

const FacultyList = ({arr}) => {
  
  return (
    <>
      {arr.map(item => <h1>{item.id}.{item.facultyName} {"  ==> "} {item.department}</h1>)}
    </>
  )
}

export default FacultyList;