import React from 'react'
import bgImage from "../assets/R1.svg";

const AuthBackDrop = () => {
  return (
    <div className="absolute z-0 flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat w-screen h-screen" 
     style={{ backgroundImage: `url(${bgImage})`, backgroundColor: `#FF6767`}}
     >

     </div>
  )
}

export default AuthBackDrop