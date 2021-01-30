import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function ReadingModal({ absolutePath, onClose, isOpen }) {
  const data = useStaticQuery(graphql`
    query DataQuery {
      allMarkdownRemark {
        edges{
          node {
            html
            fileAbsolutePath
          }
        }
      }
    }
  `);

const {node: { html }} = data.allMarkdownRemark.edges.filter(edge => edge.node.fileAbsolutePath === absolutePath)[0];

  return (
    <div
      style={{
        boxShadow: '0 -7px 20px rgba(0,0,0,0.25)',
        height: '400px',
        transform: `translateY(${isOpen ? 0 : 105}%)`,
        transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      className="cursor-default block text-left fixed bottom-0 left-0 w-full px-3 pt-5 pb-16 overflow-y-auto bg-gray-800 text-gray-200 z-50 rounded-t-xl transition"
    >
      <span
        className="absolute top-0 right-0 m-1 md:m-2 lg:m-5 p-2 rounded-full bg-gray-900 hover:bg-black transition cursor-pointer"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" id="Cross"><path d="M20 20L4 4m16 0L4 20"/></svg>
      </span>
      <div className="max-w-screen-lg p-3 pt-5 mx-auto block overflow-hidden">
        <div dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </div>
  )
}

// export const query = graphql`
//   query DataQuery {
//     allMarkdownRemark {
//       edges {
//         node {
//           html
//           fileAbsolutePath
//         }
//       }
//     }
//   }
// `;
