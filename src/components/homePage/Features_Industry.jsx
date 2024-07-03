import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby-plugin-intl'


export function FeaturesIndustry() {

  const picQuery = useStaticQuery(graphql`
        query {
          bgImage: file(relativePath: { eq: "background-features.jpg" }) {
            publicURL
          }
          picIndustry01: file(relativePath: { eq: "features/industry01.jpg" }) {
             childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED,
                formats: [AUTO, WEBP, AVIF],
                placeholder: BLURRED,
                quality: 100,
              )
            }
          }
          picIndustry02: file(relativePath: { eq: "features/industry01.jpg" }) {
             childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED,
                formats: [AUTO, WEBP, AVIF],
                placeholder: BLURRED,
                quality: 100,
              )
            }
          }
          picIndustry03: file(relativePath: { eq: "features/industry03.jpg" }) {
             childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED,
                formats: [AUTO, WEBP, AVIF],
                placeholder: BLURRED,
                quality: 100,
              )
            }
          }
          picIndustry04: file(relativePath: { eq: "features/industry04.webp" }) {
             childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED,
                formats: [AUTO, WEBP, AVIF],
                placeholder: BLURRED,
                quality: 100,
              )
            }
          }
          picPower: file(relativePath: { eq: "features/p.png" }) {
            publicURL
          }
          picLiquid: file(relativePath: { eq: "features/l2.png" }) {
            publicURL
          }
          picMachine: file(relativePath: { eq: "features/m.png" }) {
            publicURL
          }
        }
      `);

  const features = [
    { id: 1, title: 'Self-Leveling', description: 'Description', img: picQuery.picIndustry01.childImageSharp.gatsbyImageData, href: '/products/powder-01' },
    { id: 2, title: 'Concrete', description: 'Description', img: picQuery.picIndustry02.childImageSharp.gatsbyImageData, href: '/products/powder-02' },
    { id: 3, title: 'Mortar & Plaster', description: 'Description', img: picQuery.picIndustry03.childImageSharp.gatsbyImageData, href: '/products/powder-03' },
    { id: 4, title: 'Grouting', description: 'Description', img: picQuery.picIndustry04.childImageSharp.gatsbyImageData, href: '/products/powder-04' },
  ];


  return (
    <div className="container mx-auto px-4 pt-14 no-select">
      <h1 className="relative text-xl text-center text-grey-800 my-5">We serve your industry</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map(feature => (
          <Link to={feature.href} className="relative bg-gray-200 rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:bg-gray-300 p-6">
            <GatsbyImage
              image={feature.img}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-20 backdrop-blur-sm"></div> {/* Blurred overlay */}
            <div className="relative z-10">
              <h2 className="text-2xl font-bold mb-4 text-white">{feature.title}</h2>
              <p className="font-normal text-white">{feature.description}</p>
            </div>
          </Link>

        ))}
      </div>
    </div>
  );

};