import React, { useState } from 'react';

const DeleteFaculty = ({ setArr, arr }) => {
  const [num, setNum] = useState("");
  function handle() {
  let newArr = [...arr];  // make a copy (React safe)

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].id == num) {
      newArr.splice(i, 1); // remove element by index
      break;
    }
  }

  setArr(newArr);
  setNum("");
}


  return (
    <>
      <input 
        type="number" 
        value={num} 
        onChange={(e) => setNum(e.target.value)} 
      />
      <button onClick={handle}>Delete</button>
    </>
  );
};

export default DeleteFaculty;
