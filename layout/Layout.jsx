import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import { useState, useEffect } from "react";
import React from "react";

const Layout = ({ children }) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 3000)
    setLoading(false)
  }, [])
  return (
    <React.Fragment>
      {
        loading?
         <div>
         <Header />
         {children}
         <Footer />
 
       </div>:<div className="bg-secondary !w-[100%] !h-[100vh] !z-[99999]  !m-0 !p-0">
            <div className="flex items-center justify-center test-center h-screen">

              {/* <div className="absolute  w-40 h-40 rounded-full before:absolute before:content-[''] before:left-0 before:top-0 before:h-[100%] before:w-[100%]rounded-full"></div> */}

              <span className=" animate-pulse text-primary flex text-center justify-center items-center uppercase text-[20px] h-screen">
                loading...
              </span>
            </div>
          </div>
      }
     
    </React.Fragment>
  );
};

export default Layout;