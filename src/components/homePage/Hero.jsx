import React from "react";


import { Button } from '@/components/spare/Button'
import { Container } from '@/components/spare/Container'

const threeWords = [
  'Join ,',
  'Strive ,',
  'Break Boundaries',
]

export function Hero() {


  return (
    <Container className="py-12 my-12 text-center sm:my-12 md:py-10 xl:py-8 xl:my-10 2xl:py-0 2xl:my-20">
      {/* <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt="bg"
          className="absolute inset-0 -z-50 h-full w-full object-cover"
        /> */}

        {/* <div className="absolute inset-0 -z-0 bg-white bg-opacity-80"></div> */}
      <div className="absolute inset-0 -z-10 image-container">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt="bg"
          className="h-full w-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-white bg-opacity-50"></div> */}
      </div>

      {/* Banner */}
      <div className="mb-0 mt-0 flex justify-center ">
        <p className="relative rounded-full px-3 py-1 text-sm leading-5 text-gray-600 ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20">
          <span className="hidden md:inline">
            Unveiling the Future in Concrete Technology:
          </span>
          <a href="#" className="font-semibold text-indigo-600 no-underline">
            <span className="absolute inset-0" aria-hidden="true" /> Our Advanced Next Gen Powder PCE{' '}
            <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>

      {/* Hero Title */}
      <h1 className="mt-5 mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        {threeWords[0]} {' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative"> {threeWords[1]} </span>
        </span>{' '}
        {threeWords[2]}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Meet the pinnacle of innovation in the world of{'  '}
        <span className="font-bold">Concrete Water Reducers{'  '}</span>
        and{'  '}
        <span className="font-bold">Equipment{'  '}</span>manufacturing.
      </p>
      <div className="mt-10 ml-6 flex justify-center gap-x-6">
        <Button className="no-underline hover:underline" href="/register">Get our sample</Button>
        <Button
          className="no-underline hover:underline"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3">Watch video</span>
        </Button>
      </div>

    </Container>
  )
}
