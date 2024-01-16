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
                relativeDirectory: { eq: "assets/flags" }
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
        <Container>
            <div className="mt-12 flex flex-col items-center justify-center sm:py-4 sm:mb-4">
                <p className="font-display font-semibold text-base text-slate-900 text-center mb-0">
                    Trusted by global partners
                </p>
                <ul
                    role="list"
                    className="my-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 xl:gap-x-12 my-0"
                >
                    {logoFlags.map((flag, index) => (
                        <li key={index} className="flex h-15 w-20 my-0">
                            <img src={flag.url} alt={flag.alt} aria-hidden="true" className="shine-animation h-full w-full object-cover filter brightness-80 saturate-52" />
                        </li>
                    ))}
                </ul>
            </div>
        </Container>

    )
}