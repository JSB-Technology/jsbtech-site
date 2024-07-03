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
import { FloatingMenu } from '@/components/layout/FloatingMenu'

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
    href: '/products/liquid-PCE',
    icon: ChartPieIcon,
  },
  {
    name: 'Fulture of Powder PCE',
    description: 'Just announced revolution, boosting huge improvement over traditional powders, proudly heralds the future of construction.',
    href: '/#powders',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'GDPC-5C',
    description: 'The industry-disrupting, Intelligent PCE Manufacturing All-in-one Smart Machine, has now become even better!',
    href: '/products/GDPC-5C',
    icon: SquaresPlusIcon
  },
  {
    name: 'Services',
    description: 'Come learn about our Customer-first Service and Convenient Delivery process',
    href: '/Services',
    icon: Bars3Icon,
  },
]

function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} to={href} className="block w-full p-2">
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


function MobileNavigation() {
  // TODO: 改 href 到link
  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-10 w-10 items -center justify-center ui-not-focus-visible:outline-none"
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
            {/* TODO: 改移动端导航 */}
            <MobileNavLink href="/about-us">Our Story</MobileNavLink>
            <MobileNavLink href="#testimonials">Products</MobileNavLink>
            <MobileNavLink href="#testimonials">Blog</MobileNavLink>
            <MobileNavLink href="#testimonials">Q&A</MobileNavLink>

            {/* 分割线 */}
            <hr className="m-2 border-slate-300/40" />
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
    <header className="sticky top-0 z-50" style={{
      // backgroundImage: 'linear-gradient(white 75%, rgba(255, 255, 255, 0.2))'
      background: 'white'
    }}>

      <Container className="p-0">
        <nav className="relative z-40 h-33 flex justify-between items-start">
          <div className="container mx-auto flex md:gap-x-12">

            {/* 大 Logo */}
            <span>
              <Link to="/" aria-label="Home" className='pb-3'>
                <Logo />
              </Link>
            </span>


            {/* 导航栏 */}
            <span className='w-full'>
              <div className="hidden mt-9 md:flex justify-between">
                <div className="flex md:gap-x-6 lg:gap-x-8">
                  <NavLink href="/about-us">Our Story</NavLink>

                  <NavLink href="/blog">News</NavLink>

                  <NavLink href="/common-questions">Q&A</NavLink>

                  <NavLink href="/contact">Contact</NavLink>
                </div>

                
                {/* 右半侧导航栏 */}
                <div className="ml-auto -mt-1" >
                  <div className="flex gap-x-6 md:gap-x-8">

                    {/* 样本获取按钮 */}
                    <Button color="blue" className='hidden md:block no-underline h-10' to='/register-sample'>
                      <span>
                        Get Samples<span className="hidden lg:inline"></span>
                      </span>
                    </Button>

                    {/* 语言栏 */}
                    <LangSelector className="" />


                    {/* 移动端 */}
                    <div className="-mr-1 mt-3 md:hidden">
                      <MobileNavigation />
                    </div>

                  </div>
                </div>

              </div>

              {/* 下面一半导航 */}
              <div>
                <FloatingMenu />
              </div>

            </span>
          </div>


        </nav>

      </Container>
    </header>
  )
}