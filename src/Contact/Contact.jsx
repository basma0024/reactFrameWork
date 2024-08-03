import { Helmet } from "react-helmet";
import { FaStar } from "react-icons/fa6";

function Contact() {
    return ( <>

        <Helmet>
            <title>Contact</title>
          </Helmet>


          <div className=" mx-auto mt-32 text-center">
          <h2 className="text-4xl font-bold text-[#2C3E50]">CONTACT SECTION</h2>
          <div className='flex items-center justify-center m-5 text-2xl'>
            <div className='w-24 bg-[#2C3E50] h-1'></div>
            <FaStar className='mx-3  text-[#2C3E50]'  />
            <div className='w-24 bg-[#2C3E50] h-1'></div>
          </div>
        </div>

        
<div className="my-20 px-4 md:px-8">
        <form className="max-w-3xl mx-auto  ">
          <div className="relative w-full mb-8  group">
            <input
              type="text"
              name="userName"
              id="userName"
              className="block py-2.5 px-0 w-full text-lg  font-normal bg-transparent border-0 border-b appearance-none  focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="userName"
              className="peer-focus:font-normal absolute  font-normal text-opacity-80 text-[#2C3E50]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              userName
            </label>
          </div>
          <div className="relative w-full mb-8 group ">
            <input
              type="number"
              name="userAge"
              id="userAge"
              className="block py-2.5 px-0 w-full text-lg font-normal bg-transparent border-0 border-b appearance-none  focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="userAge"
              className="peer-focus:font-normal absolute  font-normal text-[#2C3E50] text-opacity-80 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              userAge
            </label>
          </div>
          <div className="relative w-full mb-8 group ">
            <input
              type="email"
              name="userEmail"
              id="userEmail"
              className="block py-2.5 px-0 w-full text-lg  font-normal bg-transparent border-0 border-b appearance-none  focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="userEmail"
              className="peer-focus:font-normal absolute  font-normal text-[#2C3E50] text-opacity-80 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              userEmail
            </label>
          </div>
          <div className="relative w-full mb-8 group ">
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              className="block py-2.5 px-0 w-full text-lg  font-normal bg-transparent border-0 border-b appearance-none  focus:outline-none focus:ring-0 focus:border-[#1ABC9C] peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="userPassword"
              className="peer-focus:font-normal absolute  font-normal text-[#2C3E50] text-opacity-80 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#1ABC9C]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              userPassword
            </label>
          </div>
          <button
            type="submit"
            class="text-white bg-[#1ABC9C] hover:bg-[#179e8d] focus:ring-4 focus:outline-none focus:ring-[#1ABC9C] font-medium rounded-lg text-sm  px-5 py-2.5 text-center mt-2"
          >
            Send a Massage
          </button>
        </form>
      </div>



    </> );
}

export default Contact;