import React from 'react';
import cloudinaryImages from "../assets/cloudinary";

const AuthBackDrop = () => {
  return (
    <div
      className="absolute z-0 flex items-center justify-center bg-cover bg-center bg-fixed bg-no-repeat px-28 py-32 w-screen h-screen"
      style={{
        backgroundImage: `url(${cloudinaryImages.authBackground})`,
        backgroundColor: "#FF6767",
      }}
    >
    </div>
  );
};

export default AuthBackDrop;
