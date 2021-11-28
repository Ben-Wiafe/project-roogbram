import React from "react";
import Azay from "../../assets/azay.jpeg";
import She from '../../assets/higher-education.png';
import { BsStarFill } from "react-icons/bs";

function Testimony() {
  return (
    <div >
      <div className="text-center mt-14 -ml-14 sm:flex-column items-center  lg:justify-evenly">
        <p className="text-yellow-500 font-semibold text-md"> Testimonial</p>
        <p className="text-blue-800 font-semibold text-2xl">
          {" "}
          What our users say about us
        </p>
      </div>
      <div className="lg:flex md:flex-column md:justify-between lg:justify-evenly sm:space-x-10  items-center pt-4 mb-4 ">
        <div className="sm:ml-16 md:ml-16 rounded-lg mb-4  w-2/4 h-1/6 p-4 lg:bg-white shadow lg:shadow-md  sm:shadow-md text-md font-bold sm:max-2-sm lg:max-w-lg">
          {" "}
          <p className="sm:max-w-lg">
          This app is very functional as a learning app
          </p>
          
          <p className="font-normal text-sm pb-5 mt-1 sm:max-w-xl">
          This is school at your own time schedule, it's an amazing app, like never before... 
          I love this app so much. The teaching is very understandable, straight to the point, no adds to distract and lessons of your choice. 
          It covers all aspects of schooling right from kindergarten to the highest level.
           Basic explanations to get the concept into your head. I love this app.          </p>

          <div className="flex space-x-3 items-center pt-2">
          <img
            className="w-6 rounded-xl h-6"
            src={Azay}
            alt="A boy smiling"
          />
          <div></div>
          <div className="lg:flex-column sm:flex-row max-w-xl md:flex-column max-w-lg">
            <p className="font-bold lg:text-xs md:text-lg sm:text-md"> Bernard Wiafe</p>
            <p className="lg:font-normal lg:text-xs sm:text-lg sm:ml-0  sm:mr-5">
              Student @ UG
            </p>
          </div>
          <div className="lg:pl-64">
            <BsStarFill style={{size:15, color:'#F59E0B'}}  />
          </div>
          <div >
            <p className="ml-0 font-bold text-sm sm:mr-2">4.3</p>
          </div>
        </div>
        </div>

        <div className="sm:ml-16 md:ml-20 ml-10 rounded-lg mb-4 w-2/4 h-1/6 p-4  lg:bg-white shadow lg:shadow-md sm:shadow-md sm:  text-md font-bold sm:max-2-sm lg:max-w-lg">
          {" "}
          <p className="max-w-xs">
          I’m doing incredibly well and had 1580 out 1600 on my last SAT mock!
          </p>
           <p className="font-normal text-sm sm:max-w-lg">
          I chanced on this website while surfing the internet and this website meets my SAT needs and requirements from all perspectives. 
          I take personal SAT mocks under examination conditions and I aced 1580 out of 1600 on my last SAT mock all thanks to this website. 
          I strongly recommend to all. What are you waiting for? Let’s win together fellas!
          </p>

          <div className="flex space-x-3 items-center pt-2">
          <img
            className="w-6 rounded-xl h-6"
            src={She}
            alt="A boy smiling"
          />
          <div></div>
          <div className="lg:flex-column sm:flex-row max-w-xl md:flex-column max-w-lg">
            <p className="font-bold lg:text-xs md:text-md"> Richard Amuzu</p>
            <p className="lg:font-normal lg:text-xs  md:text-md">Student @ KNUST
            </p>
          </div>
          <div className="lg:pl-64">
            <BsStarFill style={{size:15, color:'#F59E0B'}}  />
          </div>
          <div >
            <p className="ml-0 font-bold text-sm sm:mr-2">4.5</p>
          </div>
        </div>
        </div>
        </div>

      </div>
  
  );
}

export default Testimony;
