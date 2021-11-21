import React from 'react'
import test from '../../assets/chris-liverani-ViEBSoZH6M4-unsplash.jpg'
export default function Features() {
    return (
           <div>
              <div>
               <p class="text-blue-800 flex items-center justify-center font-semibold"> Our  <p class="text-yellow-600 ml-1">Features</p> </p>
                <p class="items-center justify-center flex text-gray-500">This very extraordinary feature can make learning activities more efficient</p>
           </div>
           <div class="p-16 flex items-center justify-between">
               <img class="md:w-full h-850 xs:max-w-lg md:max-w-md sm:w-80 h-80 lg:w-85 h-80 flex justify-between rounded-lg" src={test} alt="test and quizzes"/>
                <div class="ml-20">
                <p class="mr-35 font-bold text-blue-800 text-4xl">Assignment and Quizzes</p>
                <p class="mr-40 font-bold text-blue-800 text-4xl">& Tests</p>
                <p class="max-w-2xl"> 
                You define your project’s breakpoints in the theme.screens section of your tailwind.config.js file. The keys are your screen names (used as the prefix for the responsive utility variants Tailwind generates, like md:text-center), 
                and the values are the min-width where that breakpoint should start.
                The default breakpoints are inspired by common device resolutions:
                </p>
                </div>
             
           </div>
           </div>
    
    )
}
