import React from "react";
import TheHeader from "./TheHeader";

const Layout = ({children}) => {
  return (
    <div>
      <TheHeader />

      <div className="p-4 bg-gray-100 lg:px-16">
        {children}
      </div>
    </div>
  )
}

export default Layout;
