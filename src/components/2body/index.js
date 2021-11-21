import React from 'react'
import Aec from '../../assets/aec.jpg'
import frame from '../../assets/register.png'

export default function Aikins() {
    return (
        <div class="flex mt-14 -ml-14 sm:flex-column items-center sm:flex-grow lg:justify-evenly">
            <div class="mr-20 " >
          <p class="  font-bold font-serif text-lg flex text-blue-900"> Enroll with  <p class="ml-2 mr-2 text-yellow-600"> Aikins Educational </p> </p>
            <p class="text-yellow-600  lg:text-lg  lg:font-bold sm:font-normal sm:text-xs md:text-sm flex ">Conuslt   <p class="text-blue-900 ml-2">  &  Start Learning for SAT</p></p>
            <p class="max-w-md ">
                Traditional and online schools may use Aikins Educational Consult to handle scheduling, attendance, payments and virtual classes all in one secure cloud-based system.
            </p> 
            <a href="http://aikinseduconsult.com/">
                <img class="pt-6 w-41" src={frame} alt="registration link"/>
            </a>
        </div>
        <div >
            <img class="max-w-xl rounded-2xl mt-4 w-60 bg-red-600 " src={Aec} alt="Aikins Edu Consult Logo"/>

        </div>
        </div>
    )
}
