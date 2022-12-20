import React from 'react'
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const navigate=useNavigate()
  return (
    <div className='main' >
      <h1 className='text-danger display-1 fw-bold mb-5 ' style={{
          textShadow: "10px 10px 30px  black",
         
      }} >WELCOME</h1>
      <button className='buttona' onClick={()=>navigate("/register")} >
        <span className='fs-3' >Join Us</span>
        <i></i>
      </button>
    </div>
  );
}

export default Main