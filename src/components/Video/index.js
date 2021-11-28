import React from 'react'
import video from "../../assets/vidimg.jpg"

export default function Video() {
    return (
      <div className="sm:flex">
        <div className="sm:mr-6 lg:ml-10 ">
            <a href="https://www.youtube.com/watch?v=5_8HeGnQF-4" target="_blank">
         <img className="lg:pt-4 pb-10 w-min " alt="Azay" src={video}/> 
        </a>
        </div>
          
          
      
      </div>
    )
  }
  