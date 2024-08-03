import { Helmet } from "react-helmet";
import { FaStar } from "react-icons/fa6";

function About() {
    return ( <>

          <Helmet>
            <title>About</title>
          </Helmet>
    
    <div className="min-h-lvh bg-[#1ABC9C] flex flex-col justify-center items-center text-white"> 

        <h2 className=" text-4xl font-bold">ABOUT COMPONENT</h2>

        <div className='flex items-center m-5 text-3xl'>
                <div className='w-24 bg-white h-1.5'></div>
                <FaStar className='mx-3 text-white' />
                <div className='w-24 bg-white h-1.5'></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2">
            <p className="p-5 text-clip text-balance " >Freelancer is a free bootstrap theme created by Route. The download includes <br /> the complete source files including HTML, CSS, and JavaScript as well as <br /> optional SASS stylesheets for easy customization.</p>
            <p className="p-5"> Freelancer is a free bootstrap theme created by Route. The download includes <br /> the complete source files including HTML, CSS, and JavaScript as well as <br /> optional SASS stylesheets for easy customization.</p>

          </div>
        

    </div>
   
    </> );
}

export default About;