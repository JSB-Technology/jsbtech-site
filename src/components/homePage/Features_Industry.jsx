import React from 'react';

import { useStaticQuery, graphql } from "gatsby";

export function FeaturesIndustry() {

  const picQuery = useStaticQuery(graphql`
        query {
          bgImage: file(relativePath: { eq: "background-features.jpg" }) {
            publicURL
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
    { id: 1, title: 'Self-Leveling', description: 'Description', imgSrc: picQuery.picLiquid.publicURL },
    { id: 2, title: 'Flowing Floor Screeds', description: 'Description', imgSrc: picQuery.picPower.publicURL },
    { id: 3, title: 'Non-Shrink Grouts', description: 'Description', imgSrc: picQuery.picLiquid.publicURL },
    { id: 4, title: 'Mortar', description: 'Description', imgSrc: picQuery.picMachine.publicURL },
  ];


  return (
    <div className="container mx-auto px-4 pt-14">
      <h1 className="relative text-xl text-center text-grey-800 my-5">We serve your industry</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-200 rounded-lg p-6 transform transition-transform hover:scale-105 hover:bg-gray-300">
            <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

};