import * as React from "react"

import Layout from "@/components/layout"
import Seo from "@/components/seo"

import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { BookmarkSquareIcon, BookOpenIcon, QueueListIcon, RssIcon } from '@heroicons/react/24/solid'

const links = [
  {
    name: 'Our Story',
    href: '#',
    description: 'Discover why JSB is a leader in PCE products.',
    icon: BookOpenIcon,
  },
  {
    name: 'Products',
    href: '#',
    description: 'See our full product line and details.',
    icon: QueueListIcon
  },
  {
    name: 'Blog',
    href: '#',
    description: 'Read our latest news and articles.',
    icon: RssIcon
  },
  {
    name: 'Guides',
    href: '#',
    description: 'Look at the common questions we got asked.',
    icon: BookmarkSquareIcon,
  },

]

const NotFoundPage = () => (
  <Layout url="404" className="relative pt-10 overflow-hidden">
    <div className="absolute inset-0 h-full bg-gradient-to-b from-yellow-100/50 via-white to-white z-10"></div>
    <div className="relative z-10 mx-auto max-w-2xl text-center pt-12 sm:pt-14">

      <p className="text-base font-semibold text-xl md:leading-8 text-indigo-600">404</p>
      {/* TODO: 正式版更改404页面内容*/}
      {/* <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">This page does not exist</h1>
      <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
        Sorry, we couldn’t find the page you’re looking for.
      </p> */}
      <h1 className="pt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">This is a developing site</h1>
      <p className="pt-4 text-base leading-7 text-gray-600 sm:pt-6 sm:text-lg sm:leading-8">
        We're Getting Ready to Launch!<br />
        Stay tuned for updates or Reach out to us at <a href="mailto:info@jsbpce.com">info@jsbpce.com</a>
      </p>
    </div>
    <div className="relative pb-10 z-10 mx-auto pt-6 flow-root max-w-lg sm:pt-10">
      <h2 className="sr-only">Popular pages</h2>
      <ul role="list" className="-pt-6 divide-y divide-gray-900/5 border-b border-gray-900/5">
        {links.map((link, linkIdx) => (
          <li key={linkIdx} className="relative flex gap-x-6 py-6 mr-5">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-lg shadow-sm ring-1 ring-gray-900/10">
              <link.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
            </div>
            <div className="flex-auto">
              <h3 className="text-sm font-semibold leading-6 text-gray-900">
                <a href={link.href}>
                  <span className="absolute inset-0" aria-hidden="true" />
                  {link.name}
                </a>
              </h3>
              <p className="pt-2 text-sm leading-6 text-gray-600">{link.description}</p>
            </div>
            <div className="flex-none self-center">
              <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
          </li>
        ))}
      </ul>
      <div className="pt-10 pb-10 flex justify-center">
        <a href="#" className="text-sm font-semibold leading-6 text-indigo-600">
          <span aria-hidden="true">&larr;</span>
          Back to home
        </a>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Not Found" />

export default NotFoundPage
