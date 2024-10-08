// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const MainLayout = (Component) => function HOC(){
  return (
        <div className="flex bg-gradient-to-b from-slate-900 to-blue-900 relative">
    <Sidebar />
    <div className="md:ml-60 flex flex-col flex-grow">
      {/* <div className="sticky top-0 z-20">
        <Navbar />
      </div> */}
      <main className="relative min-h-screen overflow-hidden   justify-center md:mt- ">
          <Component />
          {/* <Outlet /> */}
      </main>      
    </div>
  </div>
     
  
  );
};

export default MainLayout;