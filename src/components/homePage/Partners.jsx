import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container } from '@/components/spare/Container'

export function Partners() {

    // query svgs from graphql
    const svgQuery = useStaticQuery(graphql`
        query {
            allFile(filter: { 
                extension: { eq: "svg" },
                sourceInstanceName: { eq: "images" },
                relativeDirectory: { eq: "assets/partners" }
            }) {
                edges {
                node {
                    publicURL
                    name
                }
                }
            }
        }
    `);

    const logoFlags = svgQuery.allFile.edges.map(({ node }) => ({
        url: node.publicURL,
        alt: node.name,
    }));

    return (
        <div className="relative inset-0 pb-6 pt-6">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-200/40 to-slate-50 z-10"></div>
            <Container >
                <div className="relative z-10 pt-12 flex flex-col items-center justify-center sm:py-4 sm:pb-4">
                    <p className="font-display text-lg text-slate-700/70 text-center mb-0 pt-6">
                        Trusted by global partners
                    </p>
                    <ul
                        role="list"
                        className="my-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 xl:gap-x-12 my-0"
                    >
                        {logoFlags.map((flag, index) => (
                            <li key={index} className="flex shine-animation h-15 w-20 my-0 overflow-hidden">
                                <img src={flag.url} alt={flag.alt} aria-hidden="true" className="h-full w-full object-cover filter brightness-80 saturate-52" />
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </div>
    )
}