import React from "react";

import Logo from "../../assets/logo.png";

export default function Navigation() {




  return (
    <nav class="flex items-center justify-around flex-wrap  p-1  ">
     <div class="flex items-center flex-shrink-0 ml-8">
     <a href="#">
     <img src={Logo} alt="uLearner logo" /> 
     </a> 
     </div>

     <div class="block lg:hidden">
       <button id ="nav-toggle" class = "flex items-center px-3 py-2  text-gray-500 hover:text-yellow-500">
       <svg class="fill-current h-5 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
       </button>
     </div>
    
      <div class="flex-grow lg:flex lg:items-center lg:auto hidden lg:block lg pt-0 topnav" id= "myTopnav">
      <ul class="list-reset lg:flex justify-end flex-1 items-center mr-6 ">
          <li class="mr-6">
          <a class="py-2 px-2 hover:text-yellow-500 " href="#">Home</a>
        </li>
        <li class="mr-6">
          <a class="inline-block px-2 py-2 hover:text-yellow-500 text-gray-500" href="#"> About Us</a>
        </li>
        <li class="mr-4">
          <a class="inline-block px-2 py-2 hover:text-yellow-500 text-gray-500" href="#">AEC</a>
        </li>
        <li>
        <span class="bg-yellow-500 rounded-xl  border-1 px-10 py-4 ml-4 text-white ">
        <a href="https://play.google.com/store/apps">Download</a>
      </span> 
        </li>
      </ul>
      </div>

    
    </nav>
  );
}
