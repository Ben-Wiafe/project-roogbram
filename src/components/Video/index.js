import React from 'react'
import video from "../../assets/vidimg.jpg"

export default function Video() {
    return (
      <div className="sm:flex">
        <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-4">
            <a href="https://www.youtube.com/watch?v=5_8HeGnQF-4" target="_self">
         <img className="lg:pt-4 pb-10 w-full ml-16 " alt="Azay" src={video}/> 
        </a>
        </div>
          
          
      
      </div>
    )
  }
  