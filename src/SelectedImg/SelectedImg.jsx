import React from "react";

export function SelectedImg({ img, handleClickOutside }) {
  return (
    <div
      className="fixed inset-0 bg-cyan-600 bg-opacity-25 overlay flex items-center justify-center z-50"
      onClick={handleClickOutside} 
    >
      <div
        className="relative p-4  mx-4 md:mx-8 lg:mx-10 z-50 flex justify-center items-center w-1/2 h-1/2"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={img} alt="Selected" className=" flex justify-center items-center z-50" />
     
      </div>
    </div>
  );
}
