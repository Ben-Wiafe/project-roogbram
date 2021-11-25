import React from "react";
import Azay from "../../assets/azay.jpeg";
import She from '../../assets/higher-education.png';
import { BsStarFill } from "react-icons/bs";

function Testimony() {
  return (
    <div>
      <div class="text-center mt-14 -ml-14 sm:flex-column items-center sm:flex-grow lg:justify-evenly">
        <p class="text-yellow-500 font-semibold text-md"> Testimonial</p>
        <p class="text-blue-800 font-semibold text-2xl">
          {" "}
          What our users say about us
        </p>
      </div>
      <div class="flex justify-center space-x-10 items-center pt-4 mb-4 ">
        <div class=" rounded-lg mb-4 max-w- w-2/4 h-1/6 p-4 lg:bg-white shadow lg:shadow-md  sm:shadow-md sm: bg-green-600 md:bg-yellow-500 text-md font-bold sm:max-2-sm lg:max-w-lg">
          {" "}
          My House Sold Out Fast!
          <p class="font-normal text-sm">
            According to a survey by Runzheimer International, the average cost
            of a fast-food meal (quarter-pound cheeseburger, large fries, medium
            soft drink, excluding taxes) in Seattle is $4.82. Suppose this
            figure was based on a sample of 27 different establishments and the
            standard deviation was $0.37
          </p>

          <div class="flex space-x-3 items-center pt-2">
          <img
            class="w-6 rounded-xl h-6"
            src={Azay}
            alt="A boy smiling"
          />
          <div></div>
          <div class="lg:flex-column sm:flex-row max-w-xl md:flex-column max-w-lg">
            <p class="font-bold text-xs"> Bernard Wiafe</p>
            <p class="lg:font-normal lg:text-xs sm:text-lg sm:ml-0  sm:mr-5">
              Student @ UG
            </p>
          </div>
          <div class="lg:pl-64">
            <BsStarFill style={{size:15, color:'#F59E0B'}}  />
          </div>
          <div >
            <p class="ml-0 font-bold text-sm sm:mr-2">4.3</p>
          </div>
        </div>
        </div>

        <div class=" rounded-lg mb-4 w-2/4 h-1/6 p-4  lg:bg-white shadow lg:shadow-md sm:shadow-md sm: bg-green-600 md:bg-yellow-500 text-md font-bold sm:max-2-sm lg:max-w-lg">
          {" "}
          Best Standard SAT App so far!!
          <p class="font-normal text-sm">
            According to a survey by Runzheimer International, the average cost
            of a fast-food meal (quarter-pound cheeseburger, large fries, medium
            soft drink, excluding taxes) in Seattle is $4.82. Suppose this
            figure was based on a sample of 27 different establishments and the
            standard deviation was $0.37
          </p>

          <div class="flex space-x-3 items-center pt-2">
          <img
            class="w-6 rounded-xl h-6"
            src={She}
            alt="A boy smiling"
          />
          <div></div>
          <div class="lg:flex-column sm:flex-row max-w-xl md:flex-column max-w-lg">
            <p class="font-bold text-xs"> Richard Amuzu</p>
            <p class="lg:font-normal lg:text-xs">Student @ KNUST
            </p>
          </div>
          <div class="lg:pl-64">
            <BsStarFill style={{size:15, color:'#F59E0B'}}  />
          </div>
          <div >
            <p class="ml-0 font-bold text-sm sm:mr-2">4.5</p>
          </div>
        </div>
        </div>
        </div>

      </div>
  
  );
}

export default Testimony;
