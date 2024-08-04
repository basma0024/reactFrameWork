import React, { useEffect, useState } from "react";
import { FaStar, FaPlus } from "react-icons/fa6";
import { Helmet } from "react-helmet";
import port1 from "../assets/poert1.png";
import port2 from "../assets/port2.png";
import port3 from "../assets/port3.png";
import { SelectedImg } from "../SelectedImg/SelectedImg"; 

function Portfolio() {
  const imgs = [port1, port2, port3, port1, port2, port3];
  const [selectedImg, setSelectedImg] = useState(null); 

  const openModal = (img) => {
    setSelectedImg(img); 
  };

  const closeModal = () => {
    setSelectedImg(null); 
  };

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("overlay")) {
      closeModal(); 
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      closeModal(); 
    }
  };

  useEffect(() => {
    if (selectedImg) {
      document.addEventListener("keydown", handleEscapeKey); 
    } else {
      document.removeEventListener("keydown", handleEscapeKey); 
    }
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [selectedImg]);

  return (
    <div>
      <div className="min-h-screen">
        <div className="container mx-auto mt-32 text-center">
          <Helmet>
            <title>Portfolio</title>
          </Helmet>
          <h2 className="text-4xl font-bold text-[#2C3E50]">PORTFOLIO COMPONENT</h2>
          <div className='flex items-center justify-center m-5 text-2xl'>
            <div className='w-24  bg-[#2C3E50] h-1'></div>
            <FaStar className='mx-3 text-[#2C3E50]' />
            <div className='w-24  bg-[#2C3E50] h-1'></div>
          </div>
        </div>

        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 mb-3">
          {imgs.map((img, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-md"
              onClick={() => openModal(img)}
            >
              <img
                src={img}
                alt={`Portfolio ${index}`}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-[#1ABC9C] opacity-0 group-hover:opacity-85 flex items-center justify-center transition-opacity duration-300">
                <FaPlus className="text-white text-6xl md:text-8xl" />
              </div>
            </div>
          ))}
        </div>

        {selectedImg && (
          <SelectedImg
            img={selectedImg}
            closeModal={closeModal}
            handleClickOutside={handleClickOutside}
          />
        )}
      </div>
    </div>
  );
}

export default Portfolio;







