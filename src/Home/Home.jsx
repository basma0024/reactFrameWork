import React from 'react'; 
import avatar from '../assets/avataaars.svg';
import { FaStar } from "react-icons/fa6";
import { Helmet } from "react-helmet";

function Home() {
    return (
        <>
         <Helmet>
            <title>home</title>
          </Helmet>
            <div className="min-h-lvh bg-[#1ABC9C] flex flex-col justify-center items-center text-white">

                <img src={avatar} alt="" className='w-60 mb-6'/>
                <h1 className=" text-4xl font-bold">START FRAMEWORK</h1>

            <div className='flex items-center m-5 text-3xl'>
                <div className='w-24 bg-white h-1.5'></div>
                <FaStar className='mx-3 text-white' />
                <div className='w-24 bg-white h-1.5'></div>
          </div>
                <p>Graphic Artist - Web Designer - Illustrator</p>

            </div>


        </>
    );
}

export default Home;
