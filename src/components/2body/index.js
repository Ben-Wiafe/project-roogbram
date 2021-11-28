import React from "react";
import Aec from "../../assets/aec.png";

export default function Aikins() {
  return (
    <div className="relative inline-flex bg-white pt-16 pb-32 lg:flex justify-between sm:flex-column sm:items-center sm:justify-center overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto  lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px- max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0 lg:max-w-xl">
            <div>
              {/* <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-yellow-600">
                
                </span>
              </div> */}
              <div className="mt-6 px-4 ">
                <span className="text-3xl font-bold tracking-tight text-gray-900 leading-10">
                  Enroll
                  <span class="text-yellow-500 ml-1">
                    with Aikins Educational <br /> Consult{" "}
                  </span>{" "}
                  & Start Learning for SAT
                </span>
                <p className="mt-4 text-lg text-gray-500 ">
                  Traditional and online schools may use Aikins Educational
                  Consult to handle scheduling, attendance, payments, and
                  virtual classes all in one secure cloud-based system.
                </p>
                <div className="mt-6">
                  <a
                    href="http://aikinseduconsult.com/"
                    className="inline-flex px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img className="inline-flex pt-7" src={Aec} alt="AEC Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
