import React from "react";
import logo from "../../assets/elearning.png";
import google from "../../assets/google sto.svg";
import apple from "../../assets/Os store.svg";


export default function FirstBody() {
  return (
    <div>
    <div className="lg:flex my-20 mx-4 justify-around p-4 sm:flex-column md:flex:column md:items-center">
    <div className="-mt-8 mr-11">
        <img
          className="transform skew-y-12 -skew-x-12 mr-4 sm:ml-24 md:w-8/12 lg:w-full  "
          src={logo}
          alt="e-learning board"
          width="400"
        />
      </div>
      <div className="ml-4 lg:ml-40">
        <p className="text-yellow-500 font-medium mb-3 ">SAT EDUCATION MATERIALS</p>
        <h2 className="text-5xl font-semibold text-blue-800 opacity-80 font-Poppins">
          {" "}
          The #1 Education Platform{" "}
        </h2>
        <h2 className="text-5xl font-semibold text-blue-800 opacity-80"> for SAT Students </h2>
        <p className="max-w-2xl pt-3 opacity-60">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. dummy text ever since the 1500s, when an unknown printer
          took a galley of type It has survived not only five centuries, but
          also the leap into electronic.
        </p>
        <div className="flex ">
          <a href=" # ">
            <img className=" p-1 mt-7" src={google} alt="App store" width="170" />
          </a>
          <a href=" # ">
            <img className=" p-1 mt-7" src={apple} alt="App store" width="162" />
          </a>
        </div>
      </div>
    
    </div>
    <div>
          <p className="text-center justify-center items-center font-semibold text-lg flex text-blue-900 text-3xl py-2 "> Here are some <p className="ml-2 mr-2 text-yellow-500"> benefits </p> of uLEARNER</p>
          <h5 className="text-center text-gray-500 lg:text-lg sm:text-md md:text-md sm:text-sm">uLEARNER is an educational platform with Scholastic Aptitude Test </h5>
          <h5 className="text-center text-gray-500 lg:text-lg sm:text-sm md:text-md">(SAT) material for students preparing to take the test</h5>
 </div>
      </div>
  );
}
