import React from 'react'
import test from '../../assets/chris-liverani-ViEBSoZH6M4-unsplash.jpg'
export default function Features() {
    return (
           <div>
              <div>
               <p className="text-center justify-center items-center font-semibold text-lg flex  text-blue-900 text-3xl py-2"> Our  <p className="text-yellow-600 ml-1">Features</p> </p>
                <p className="items-center justify-center flex text-lg text-gray-500">This very extraordinary feature can make learning activities more efficient</p>
           </div>
           <div className="p-10 lg:flex items-center justify-around sm:flex md:flex-column ">
               <img className="md:w-full h-850 pl-12 w-full md:max-w-md lg:w-85 h-80 flex justify-between rounded-lg" src={test} alt="test and quizzes"/>
                <div className="ml-20 ">
                <p className="mr-35 font-bold text-blue-800 sm:text-3xl md:text-4xl text-3xl mt-10 lg:text-4xl">Assignment and Quizzes</p>
                <p className="mr-40 font-bold text-blue-800  text-4xl">& Tests</p>
                <p className="lg:max-w-2xl sm:max-w-md"> 
                You define your project’s breakpoints in the theme.screens section of your tailwind.config.js file. The keys are your screen names (used as the prefix for the responsive utility variants Tailwind generates, like md:text-center), 
                and the values are the min-width where that breakpoint should start.
                The default breakpoints are inspired by common device resolutions:
                </p>
                </div>
             
           </div>
           </div>
    
    )
}
