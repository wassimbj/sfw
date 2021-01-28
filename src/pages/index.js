import { Link } from "gatsby"
import React from "react"
// import { Link } from "gatsby"

import SEO from "../components/seo"

export default function IndexPage(){
  return (
    <div className="text-gray-300 max-w-screen-lg mx-auto">
      <SEO title="Home" />
      <p className="text-center text-4xl font-bold text-gray-200 mt-20"> Stupid Fancy Words </p>
      <p className="text-center text-sm text-gray-500 mt-2"> understanding fancy words, in a simpler way. </p>
  
      <div className="mt-10 px-2">
        <span className="block mb-5 font-semibold text-2xl"> Categories </span>
  
        <div class="flex flex-wrap -mx-3 overflow-hidden">
          <Link to="#" className="inline-block my-3 px-3 w-full overflow-hidden lg:w-1/3">
           <div className="bg-gray-800 border-2 border-gray-700 rounded-lg p-3 hover:border-gray-900 transition">
            <span className="font-medium text-lg"> 💻 Computing </span>
           </div>
          </Link>
          <Link to="#" className="inline-block my-3 px-3 w-full overflow-hidden lg:w-1/3">
           <div className="bg-gray-800 border-2 border-gray-700 rounded-lg p-3 hover:border-gray-900 transition">
            <span className="font-medium text-lg"> 🟡 Javascript </span>
           </div>
          </Link>
          <Link to="#" className="inline-block my-3 px-3 w-full overflow-hidden lg:w-1/3">
           <div className="bg-gray-800 border-2 border-gray-700 rounded-lg p-3 hover:border-gray-900 transition">
            <span className="font-medium text-lg"> 🗃️ Databases </span>
           </div>
          </Link>
          <Link to="#" className="inline-block my-3 px-3 w-full overflow-hidden lg:w-1/3">
           <div className="bg-gray-800 border-2 border-gray-700 rounded-lg p-3 hover:border-gray-900 transition">
            <span className="font-medium text-lg"> 🎨 Front-end </span>
           </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
