import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import NavBar from './navbar/NavBar';
import{createBrowserRouter, RouterProvider} from "react-router-dom";
import LayOut from './LayOut/LayOut';
import Home from './Home/Home';
import About from './About/About';
import Portofolio from './Portofolio/Portofolio';
import Contact from './Contact/Contact';

const x= createBrowserRouter([
 {element:<LayOut />,path:'', children:[
  {index:true , element: <Home />},
  {path:'about' , element: <About />},
  {path:'portofolio' , element: <Portofolio />},
  {path:'contact' , element: <Contact />},
  {path:'*' , element: <h2 className="min-h-lvh flex justify-center items-center text-5xl text-green-800 font-serif">Page Not Found</h2>},
 ]}
])



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     
      <RouterProvider  router={x}/>
    

      
    </>
  )
}

export default App
   