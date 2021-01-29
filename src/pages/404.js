import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <p className="text-center font-black text-lg text-white mt-10">404 NOT FOUND</p>
    <Link to="/" style={{width: '130px'}} className="mt-5 block text-gray-400 px-3 py-1 rounded-full mx-auto text-center border border-gray-700 hover:border-gray-600">
      Go back
    </Link>
  </div>
)

export default NotFoundPage
