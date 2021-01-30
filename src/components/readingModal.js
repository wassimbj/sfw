import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function ReadingModal({ absolutePath, isOpen }) {
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
        boxShadow: '0 0 20px rgba(0,0,0,0.25)',
        height: '400px',
        transform: `translateY(${isOpen ? 0 : 100}%)`,
        transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      className="fixed bottom-0 left-0 w-full px-3 pt-5 pb-16 overflow-y-auto bg-gray-800 text-gray-200 z-50 rounded-t-xl transition"
    >
      <div className="max-w-screen-lg p-3 mx-auto block overflow-hidden">
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
