import React from 'react';
import { useForm } from "react-hook-form";

const FacultyRegistration = ({ setArr }) => {
  const { register, handleSubmit, reset } = useForm();

  function submit(data) {
    setArr(prev => [...prev, { id: prev.length + 1, ...data }]);
    reset();
  }

  return (
    <>
      <style>
        {`
          form {
            width: 320px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 8px;
            background: #f8f8f8;
          }

          label {
            display: block;
            margin-top: 12px;
            font-weight: bold;
          }

          input {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
            border: 1px solid #aaa;
            border-radius: 4px;
          }

          button {
            margin-top: 15px;
            padding: 10px;
            width: 100%;
            background: #0275d8;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 16px;
          }

          button:hover {
            background: #025aa5;
          }
        `}
      </style>

      <form onSubmit={handleSubmit(submit)}>
      
        <label>Faculty Name</label>
        <input 
          type="text"
          {...register("facultyName", { required: true })} 
        />
      
        <label>Department</label>
        <input 
          type="text"
          {...register("department", { required: true })} 
        />

        <label>Email</label>
        <input 
          type="email"
          {...register("email", { required: true })} 
        />

        <label>Qualification</label>
        <input 
          type="text"
          {...register("qualification", { required: true })} 
        />

        <label>Phone</label>
        <input 
          type="tel"
          {...register("phone", { required: true })} 
        />

        <button type="submit">Register Faculty</button>
      </form>
    </>
  );
};

export default FacultyRegistration;
