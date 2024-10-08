/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    


  return (
    <header className="bg-[#364258]  ml-1 p-3 md:ml-[48] overflow-hidden">
      <ToastContainer />

      <div className="flex flex-col-reverse gap-4 md:gap-0 md:flex-row items-center">
        <div className="flex items-center flex-grow">
          <div className="md:w-1/4 flex items-center px-3 rounded-full">
            

            <input type="text" placeholder="Search" className="w-full outline-none rounded p-1" />

          </div>
        </div>
        <div className="">
           
        </div>
      </div>
    </header>
  );
};

export default Navbar;