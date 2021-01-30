import { Link } from "gatsby"
import React from "react"
import categories from '../content/categories.json';
// import { Link } from "gatsby"

import SEO from "../components/seo"
import NavBar from "../components/navbar";

export default function IndexPage(){
  return (
    <>
    <SEO title="Home" />
    <NavBar />
    <div className="text-gray-300 max-w-screen-lg mx-auto">
      <p className="text-center text-4xl font-bold text-gray-200 mt-20"> Stupid Fancy Words </p>
      <p className="text-center text-sm text-gray-500 mt-2"> understanding fancy words, in a simpler way. </p>
  
      <div className="mt-10 px-2">
        <span className="block mb-5 font-semibold text-2xl"> Categories </span>
  
        <div class="flex flex-wrap overflow-hidden">
          {
            categories.map(cat => (
              <Link to={`/category/${cat.slug}`} className="inline-block my-3 px-3 w-1/2 overflow-hidden md:w-1/3">
                <div className="overflow-hidden overflow-ellipsis bg-gray-800 border-2 border-gray-700 rounded-lg p-3 hover:border-gray-900 transition text-center">
                  <span className="font-medium text-lg">{cat.title}</span>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
    </>
  );
}
