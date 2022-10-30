import React from "react";
import Home from "./Home";
import Search from "./Search";
import "./main.css"
import videobg from '../components/video1.mp4'
function Main()
{
    return (
 <div className="main">
   <div className="overlay">

   <video src={videobg}  autoPlay loop muted />

   </div>
   <div className="content">
   <Home/>
   <div className="container">
    <Search/>
   </div>
    </div>
 </div>
    )
}
export default Main ;