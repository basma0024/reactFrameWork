import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

function Footer() {
    return ( <>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-3 bg-na text-white p-5 sm:py-10 lg:p-20 text-center">
  <div>
    <h2 className="text-2xl sm:text-3xl font-semibold">LOCATION</h2>
    <p className="p-1">2215 John Daniel Drive</p>
    <p className="p-2">Clark, MO 65243</p>
  </div>

  <div className="">
    <h2 className="text-2xl sm:text-3xl font-semibold mb-2 ">AROUND THE WEB</h2>
    <div className="icons flex items-center justify-center p-2">
      <FaFacebook className="mr-2 text-4xl sm:text-5xl p-2 sm:p-3 rounded-full border-white border text-center flex items-center justify-center" />
      <FaTwitter className="mr-2 text-4xl sm:text-5xl p-2 sm:p-3 rounded-full border-white border text-center flex items-center justify-center" />
      <FaLinkedin className="mr-2 text-4xl sm:text-5xl p-2 sm:p-3 rounded-full border-white border text-center flex items-center justify-center" />
      <FaGlobe className="mr-2 text-4xl sm:text-5xl p-2 sm:p-3 rounded-full border-white border text-center flex items-center justify-center" />
    </div>
  </div>

  <div>
    <h2 className="text-2xl sm:text-3xl font-semibold">ABOUT FREELANCER</h2>
    <p className="p-2">Freelance is a free to use, licensed Bootstrap theme <br /> created by Route</p>
  </div>
</div>


<div className="bg-foot text-center text-white p-3">
  <p>Copyright © Your Website 2021</p>
</div>

    </> );
}

export default Footer;