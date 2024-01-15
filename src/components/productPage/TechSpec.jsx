import React from "react";
import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import { useStaticQuery, graphql } from "gatsby";

import { Speclist } from '@/components/productPage/Speclist'

const product_title = 'WRP-6 Polycarboxylate Superplasticizer (PCE) Powder'
const product_desc = 'WRP-6 is a highly efficient, free-flowing, and spray-dried powder composed of a new generation polycarboxylate-based polymer. It serves as a superplasticizer for cement-based materials, offering exceptional performance. Additionally, it functions as an excellent dispersion plasticizer suitable for gypsum, ceramic, and other mineral materials.\nWRP-6 is specifically designed as a superplasticizer for high-performance concrete, high-strength concrete, high-volume fly ash/slag concrete, as well as grouting, self-leveling screed, and mortar applications. It meets the ASTM C 494, Type-F specifications, ensuring its quality and reliability.'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function TechSpec() {

    const picQuery = useStaticQuery(graphql`
    query {
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


    const tabs = [
        {
            name: 'Features',
            features: [
                {
                    name: 'Remarkable water reduction capability of up to 30%',
                    description:
                        'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
                    imageSrc: picQuery.picPower.publicURL,
                    imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
                },
            ],
        },
        {
            name: 'Usage',
            features: [
                {
                    name: 'Dissolved in water',
                    description:
                        'The Organize base set allows you to configure and evolve your setup as your items and habits change. The included trays and optional add-ons are easily rearranged to achieve that perfect setup.',
                    imageSrc: picQuery.picLiquid.publicURL,
                    imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
                },
            ],
        },
    ]



    return (
        <div className="bg-white">

            <div aria-hidden="true" className="relative">
                <img
                    src={picQuery.picPower.publicURL}
                    alt=""
                    className="h-48 w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white" />
            </div>

            <section aria-labelledby="features-heading" className="mx-auto max-w-7xl pb-32 sm:px-2 lg:px-8">
                <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                    <div className="max-w-3xl">
                        <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {product_title}
                        </h2>
                        <p className="mt-4 text-gray-500">
                            {product_desc}
                        </p>
                    </div>

                    <Tab.Group as="div" className="mt-4">
                        <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                            <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                                <Tab.List className="-mb-px flex space-x-10">
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab.name}
                                            className={({ selected }) =>
                                                classNames(
                                                    selected
                                                        ? 'border-indigo-500 text-indigo-600'
                                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                                    'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                                                )
                                            }
                                        >
                                            {tab.name}
                                        </Tab>
                                    ))}
                                </Tab.List>
                            </div>
                        </div>

                        <Tab.Panels as={Fragment}>
                            {tabs.map((tab) => (
                                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                                    {tab.features.map((feature) => (
                                        <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                                            <div className="mt-6 lg:col-span-5 lg:mt-0">
                                                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                                                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                                            </div>
                                            <div className="lg:col-span-7">
                                                <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-2 sm:aspect-w-5">
                                                    <img src={feature.imageSrc} alt={feature.imageAlt} className="object-cover object-center" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                    <Speclist />
                </div>
            </section>
        </div>
    )
}
