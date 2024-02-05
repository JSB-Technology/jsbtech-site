import React from "react";
import { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby-plugin-intl";

import clsx from 'clsx'
import { Tab } from '@headlessui/react'

import { Container } from '@/components/spare/Container'

export function Features() {

  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

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
    {
      title: 'Reputable Liquid PCE',
      description: 'Our reputable Liquid Polycarboxylate Superplasticizer, the industry-leading 4th-gen Water-Reducing Agent',
      href: '/products/liquid',
      image: picQuery.picLiquid.publicURL
    },
    {
      title: 'Fulture of Powder PCE',
      description: 'Just announced revolution, boosting huge improvement over traditional powders, proudly heralds the future of construction.',
      href: '/products/powder',
      image: picQuery.picPower.publicURL
    },
    {
      title: 'GDPC-5C',
      description: 'The industry-disrupting, Intelligent PCE Manufacturing All-in-one Smart Machine, has now become even better!',
      href: '/products/machine',
      image: picQuery.picMachine.publicURL
    },
  ]

  return (
    <section
      id="featuring_Products"
      aria-label="JSB Technology's featuring Products"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-22"
    >
      <img
        src={picQuery.bgImage.publicURL}
        alt="background texture"
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        width={2245}
        height={1636} />

      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Decade of Innovation, Pioneering the Industry with Pride.
          </h2>
          <div className="mt-6 mx-auto text-lg tracking-tight text-blue-100">
            <p>
              Experience the future of PCE technology with JSB Technology, where excellence is not just our history, but our everyday commitment.
            </p>
          </div>

        </div>
        <Tab.Group
          as="div"
          className="mt-4 grid grid-cols-1 items-center gap-y-2 pt-8 sm:gap-y-6 md:mt-10 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          // id={`tab-${feature.title.replace(/\s+/g, '-').toLowerCase()}`}
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 w-[45rem] p-6 pr-20 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Link to={feature.href}>
                        <img
                          className="w-full rounded-xl border-14 border-white"
                          src={feature.image}
                          alt={'picture of ' + feature.title}
                          priority
                          sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"

                        />
                      </Link>
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
