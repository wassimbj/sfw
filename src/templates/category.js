// import { Link } from "gatsby"
import React from "react"
import categories from '../content/categories.json';
// import { Link } from "gatsby"


import SEO from "../components/seo"
import NavBar from "../components/navbar";

export default function CategoryPage({ data, pageContext }) {
  const category = categories.filter((cat) => cat.slug === pageContext.slug)[0];
  const subCategories = data.allFile.edges;
  return (
    <>
      <SEO title={`${category.title}`} />
      <NavBar />
      <div className="text-gray-300 max-w-screen-lg mx-auto">
        <span className="block mt-10 mb-5 text-center font-semibold text-4xl text-gray-400">{category.title}</span>
        <div className="mt-10 px-2">
          <div class="flex flex-wrap overflow-hidden">
            {
              subCategories.map(sub => (
                <div className="inline-block my-3 px-3 w-full overflow-hidden md:w-1/3 lg:w-1/4 cursor-pointer">
                  <div className="bg-gray-800 border-2 border-gray-700 rounded-lg p-3 hover:border-gray-900 transition text-center">
                    <span className="font-medium text-lg">{sub.node.name}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
// filter: {relativeDirectory: {eq: "content/categories/databases"}}
export const query = graphql`
  query getCategoriesFilesQuery($folder: String = "") {
    allFile(
      filter: {
        sourceInstanceName: {eq: "categories"},
        extension: {eq: "md"},
        relativeDirectory: {eq: $folder}
      }
    ) {
      edges {
        node {
          name
          relativeDirectory
        }
      }
    }
  }
`
