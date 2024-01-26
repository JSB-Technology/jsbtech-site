'use client'

import React, { Fragment, useState } from 'react'
import { Link } from 'gatsby-plugin-intl'

import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/spare/Button'
import { Container } from '@/components/spare/Container'
import { Logo } from '@/components/spare/Logo'
import { NavLink } from '@/components/layout/NavLink'
import { LangSelector } from '@/components/spare/LangSelector'

import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

const products = [
  {
    name: 'Reputable Liquid PCE',
    description: 'Our reputable Liquid Polycarboxylate Superplasticizer, the industry-leading 4th-gen Water-Reducing Agent',
    href: '#products',
    icon: ChartPieIcon,
  },
  {
    name: 'Fulture of Powder PCE',
    description: 'Just announced revolution, boosting huge improvement over traditional powders, proudly heralds the future of construction.',
    href: '/products',
    icon: CursorArrowRaysIcon,
  },
  { name: 'GDPC-5C', description: 'The industry-disrupting, Intelligent PCE Manufacturing All-in-one Smart Machine, has now become even better!', href: '#', icon: SquaresPlusIcon },
  {
    name: 'Services',
    description: 'Come learn about our Customer-first Service and Convenient Delivery process',
    href: '#',
    icon: Bars3Icon,
  },
]

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

// TODO: 改 href 到link
function MobileNavigation() {

  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items -center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="#testimonials">Our Story</MobileNavLink>
            <MobileNavLink href="#testimonials">Products</MobileNavLink>
            <MobileNavLink href="#testimonials">News</MobileNavLink>
            <MobileNavLink href="#testimonials">Q&A</MobileNavLink>

            {/* 分割线 */}
            <hr className="m-2 border-slate-300/40" />
            // TODO: 验证 herf #hero
            <MobileNavLink href="#hero">Get Samples</MobileNavLink>

          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <header className="sticky top-0 py-2 z-50 max-h-40 shadow-sm" style={{
      // backgroundImage: 'linear-gradient(white 75%, rgba(255, 255, 255, 0.2))'
      background: 'white'
    }}>
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link to="/" aria-label="Home">
              <Logo />
            </Link>

            <div className="hidden md:flex md:gap-x-6">

              <Popover.Group className="flex lg:gap-x-8">

                <NavLink href="#pricing">Our Story</NavLink>

                <Popover>
                  <Popover.Button
                    className="inline-block font-semibold rounded-lg px-2 py-1 text-sm text-slate-700 no-underline hover:bg-slate-100 hover:text-slate-900"
                    onMouseEnter={() => setIsOpen(true)}
                    onMouseLeave={() => setIsOpen(false)}
                  >
                    Products
                    <ChevronDownIcon className="inline-block h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-1"
                  >
                    <Popover.Panel
                      className="fixed shadow-md items-center inset-x-0 top-12 left-0 right-0 -z-10 bg-white pt-14 ring-0 ring-gray-900/5"
                      onMouseEnter={() => setIsOpen(true)}
                      onMouseLeave={() => setIsOpen(false)}
                      show={isOpen.toString()}
                    >
                      <div className="grid grid-cols-4 max-w-7xl mx-auto gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                        {products.map((item) => (
                          <div key={item.name} className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50">
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                              <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                            </div>
                            <Link to={item.href} className="mt-6 block font-semibold no-underline text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </Link>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        ))}
                      </div>
                      {/* <div className="bg-gray-50">
                        <div className="px-6 lg:px-8 max-w-7xl mx-auto">
                          <div className="grid grid-cols-3 divide-x divide-gray-900/5 border-x border-gray-900/5">
                            {callsToAction.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center justify-center no-underline gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                              >
                                <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div> */}
                    </Popover.Panel>
                  </Transition>

                </Popover>

                {/* <NavLink href="#pricing">Downloads</NavLink> */}
                <NavLink href="#pricing">News</NavLink>
                <NavLink href="#pricing">Q&A</NavLink>
              </Popover.Group>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            {/* <div className="hidden md:block ">
              <NavLink  href="/login">Our Story</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/login">Blog</NavLink>
              <NavLink href="/login">Downloads</NavLink>
            </div> */}
            
            <Button href="/register" color="blue" className='no-underline h-9 sm:hidden'>
              <span>
                Get Samples<span className="hidden lg:inline"></span>
              </span>
            </Button>

            <LangSelector />

            <div className="-mr-1 mt-4 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>

      </Container>
    </header>
  )
}