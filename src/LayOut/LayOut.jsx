import { Outlet } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import Footer from "../Footer/Footer";

function LayOut() {
    return ( <>
    
        <NavBar />
    <Outlet  />
    <Footer/>
    
    </> );
}

export default LayOut;