// import { Link } from "gatsby"
import React from "react"
import categories from '../content/categories.json';
import activeLang from '../lang/activeLang';

import SEO from "../components/seo"
import NavBar from "../components/navbar";
import SubCategoryCard from "../components/subCategoryCard";

export default function CategoryPage({ data, pageContext }) {
  const category = categories[activeLang].filter((cat) => cat.slug === pageContext.slug)[0];
  const subCategories = data.allFile.edges;
  return (
    <>
      <SEO title={`${category.title}`} />
      <NavBar />
      <div className="text-gray-300 max-w-screen-lg mx-auto">
        <span className="block mt-10 mb-5 text-center font-semibold text-4xl text-gray-400">{category.title}</span>
        <div className="mt-10 px-2">
          <div class="flex flex-wrap overflow-hidden pb-20">
            {
              subCategories.map(sub => (
                <SubCategoryCard
                  name={sub.node.name}
                  absolutePath={sub.node.absolutePath}
                />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}

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
          absolutePath
        }
      }
    }
  }
`
