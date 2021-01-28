// import { Link } from "gatsby"
import React from "react"
import categories from '../content/categories.json';
// import { Link } from "gatsby"

import SEO from "../components/seo"

export default function CategoryPage() {
  const locSearch = window.location.search
  const slug = locSearch.slice(locSearch.indexOf('?')+1)
  const category = categories.filter((cat) => cat.slug === slug)[0];

  return (
    <div className="text-gray-300 max-w-screen-lg mx-auto">
      <SEO title={`${category.title}`} />
  
      <div className="mt-10 px-2">
        <span className="block mb-5 text-center font-semibold text-4xl text-gray-400">{category.title}</span>
  
        <div class="flex flex-wrap -mx-3 overflow-hidden">
        </div>
      </div>
    </div>
  );
}
