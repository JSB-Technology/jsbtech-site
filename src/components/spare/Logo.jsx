import React from "react"
import { useStaticQuery, graphql } from "gatsby";


export function Logo(props) {

  const logoQuery = useStaticQuery(graphql`
    query {
      file(
        relativePath: { eq: "assets/logo.svg" },
        ) {
          publicURL
      }
    }
  `);

  return (
    <div className="logo-container" >
      <img src={logoQuery.file.publicURL} alt="Logo" className="w-full h-full object-contain" style={
        { width: 150, height: 150}
      }/>
    </div>
  )
}
