import React from "react";
import logo from "../../assets/elearning.png";
import google from "../../assets/google sto.svg";
import apple from "../../assets/Os store.svg";
import {FaFileInvoice, FaCalendarAlt,} from 'react-icons/fa'
import {TiGroup} from 'react-icons/ti';

export default function FirstBody() {
  return (
    <div>
    <div class="flex my-20 mx-4 justify-between">
      <div class="ml-8">
        <p class="text-yellow-500 font-medium mb-3 ">SAT EDUCATION MATERIALS</p>
        <h2 class="text-5xl font-bold text-blue-800 opacity-80 font-Poppins">
          {" "}
          The #1 Education Platform{" "}
        </h2>
        <h2 class="text-5xl font-bold text-blue-800 opacity-80"> for SAT Students </h2>
        <p class="max-w-2xl pt-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. dummy text ever since the 1500s, when an unknown printer
          took a galley of type It has survived not only five centuries, but
          also the leap into electronic.
        </p>
        <div class="flex ">
          <a href=" # ">
            <img class=" p-1 mt-7" src={google} alt="App store" width="170" />
          </a>
          <a href=" # ">
            <img class=" p-1 mt-7" src={apple} alt="App store" width="162" />
          </a>
        </div>
      </div>
      <div class="-mt-5 ">
        <img
          class="transform skew-y-12 -skew-x-12 "
          src={logo}
          alt="e-learning board"
          width="400"
        />
      </div>
    </div>
          <p class="text-center justify-center items-center font-bold font-serif text-lg flex text-blue-900"> Here are some <p class="ml-2 mr-2 text-yellow-500"> benefits </p> of uLEARNER</p>
          <h5 class="text-center text-gray-500 text-sm">uLEARNER is an educational platform with Scholastic Aptitude Test </h5>
          <h5 class="text-center text-gray-500 text-sm">(SAT) material for students preparing to take the test</h5>
      
      <div class="flex mt-10 items-center justify-around mx-32">

      <span class="border-2 rounded-2xl border-opacity-50 p-8 max-w-xs shadow-2xl blur-xl">
        <h3 class="absolute top-full mt-16 left-80 -mx-5 bg-blue-600 rounded-3xl p-3"> <FaFileInvoice size="24" color="white"/> </h3>
        <p class="text-blue-900 font-semibold mb-1 "> Online Billing <p> Invocing & Contracts </p> </p>
        <h6 class="text-xs max-w-lg"> Simple and secure control of your <h6> organization's financial and legal</h6> <h6> transactions.Send customized</h6> <h6> incovices and contracts</h6> </h6>
        </span>

        <div class="absolute top-full mt-16 left-2/4 -mx-5 bg-blue-400 rounded-3xl p-3"> <FaCalendarAlt size="24" color="white"/> </div>
        <span class="border-2 rounded-2xl border-opacity-50 p-8 max-w-xs shadow-2xl blur-xl">
        <p class="text-blue-900 font-semibold mb-1"> <p> Easy scheduling &  </p> Attendance Scheduling</p>
        <h6 class="text-xs max-w-sm text-center"> Schedule and reserve classrooms at <p>one campus or multiple campuses.</p> 
         <p>Keep detailed records of student</p> attendance.</h6>
        </span>
        <h3 class="absolute top-full mt-16 left-3/4  bg-yellow-500 rounded-3xl p-3"> <TiGroup  size="24" color='white'/> </h3>
        <span class="border-2 rounded-2xl border-opacity-50 p-10 max-w-xs shadow-2xl blur-xl">
        <p class="text-blue-900 font-semibold mb-1">Customer Tracking </p>
        <h6 class="text-xs mb-3 max-w-sm text-center"> Automate and track emails to <p>individuals or groups. Skilline’s</p>  built-in system helps organize <p>your organization .</p> </h6>
        </span>
      </div>
    </div>
  );
}
