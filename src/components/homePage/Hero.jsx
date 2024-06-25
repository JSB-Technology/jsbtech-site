import React from "react";
import { Link } from "gatsby-plugin-intl";

import { Button } from '@/components/spare/Button'
import { Container } from '@/components/spare/Container'
import { FeaturesIndustry } from "@/components/homePage/Features_Industry";

const threeWords = [
  'Join ,',
  'Strive ,',
  'Break Boundaries',
]

export function Hero() {

  return (
    <Container className="pt-12 mt-12 text-center sm:my-12 md:pt-10 xl:pt-8 xl:mt-10 2xl:pt-0 2xl:mt-20">
      {/* <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt="bg"
          className="absolute inset-0 -z-50 h-full w-full object-cover"
        /> */}

      {/* <div className="absolute inset-0 -z-0 bg-white bg-opacity-80"></div> */}

      {/* TODO: 动态背景图片 + 更正图片加载方式！！！ */}

      <div className="absolute inset-0 z-0 image-container">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt="bg"
          className="h-full w-full object-cover"
        />

        {/* <div className="absolute inset-0 bg-white bg-opacity-50"></div> */}
      </div>

      <div className="absolute inset-0 z-2 bg-gradient-to-b from-transparent to-white" />



      {/* 新闻 banner */}
      {/* TODO: 产品页完善后更正链接 */}
      {/* <div className="mb-0 mt-0 flex justify-center z-10">
        <p className="relative rounded-full px-3 py-1 text-sm leading-5 text-gray-600 ring-1 ring-inset ring-gray-800/10 hover:ring-gray-900/20">
          <span className="hidden md:inline">
            Unveiling the Future in Concrete Technology:
          </span>
          
          <Link to="/productspce" className="font-semibold text-indigo-600 no-underline">
            <span className="absolute inset-0" aria-hidden="true" /> Our Advanced Next Gen Powder PCE{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </div> */}

      {/* Hero 大标语 */}
      <h1 className="relative mt-5 z-10 mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        {threeWords[0]} {' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-200/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative"> {threeWords[1]} </span>
        </span>{' '}
        {threeWords[2]}
      </h1>

      {/* Hero 小标语 */}
      <p className="relative z-10 mx-auto mt-5 max-w-2xl text-lg tracking-tight text-slate-700">
        Meet the pinnacle of innovation in the world of{'  '}
        <span className="font-bold">Concrete Water Reducers{'  '}</span>
        and{'  '}
        <span className="font-bold">Equipment{'  '}</span>manufacturing.
      </p>

      {/* Hero 页按钮 */}
      <div className="relative z-10 mt-4 ml-6 flex justify-center gap-x-6 md:mt-0">
        <Button className='bg-green-400 hover:bg-green-300 transition duration-200' to='/register-sample'>
          <svg className="h-5 w-5 fill-white group-active:fill-current group-hover:fill-gray-700 transition duration-250" viewBox="0 0 1024 1024">
            <path d="M294.058667 219.2384l26.282666-63.010133L750.933333 335.650133v189.3888c0 23.381333-13.2096 44.765867-34.133333 55.227734a23.586133 23.586133 0 0 1-34.133333-21.0944v-178.005334l-388.608-161.928533z"></path>
            <path d="M485.034667 92.552533a68.266667 68.266667 0 0 1 45.568-1.501866l4.027733 1.416533 399.3088 154.897067a34.133333 34.133333 0 0 1-22.152533 64.512l-2.525867-0.853334L509.952 156.091733 114.858667 310.971733a34.133333 34.133333 0 0 1-27.357867-62.498133l2.440533-1.058133 395.093334-154.862934zM509.883733 409.070933a34.133333 34.133333 0 0 1 34.048 31.573334l0.085334 2.56V904.533333a34.133333 34.133333 0 0 1-68.181334 2.56l-0.085333-2.56V443.204267a34.133333 34.133333 0 0 1 34.133333-34.133334z"></path>
            <path d="M68.266667 279.1936v443.392a68.266667 68.266667 0 0 0 41.130666 62.634667l373.572267 161.928533a68.266667 68.266667 0 0 0 53.521067 0.341333l377.344-158.037333A68.266667 68.266667 0 0 0 955.733333 726.459733V279.1936a34.133333 34.133333 0 0 0-46.762666-31.709867l-399.018667 158.941867-394.8032-158.890667A34.133333 34.133333 0 0 0 68.266667 279.176533zM535.210667 469.845333L887.466667 329.5232v396.9536l-377.344 158.037333L136.533333 722.5856V329.693867l347.921067 140.066133a68.266667 68.266667 0 0 0 50.756267 0.085333z"></path>
          </svg>
          <span className="ml-2 text-white group-hover:text-gray-100/0 transition duration-200">
            Free sample
          </span>
        </Button>

        {/* TODO: yt上线后更新视频链接 */}
        <Button
          className="no-underline bg-white hover:bg-red-400 transition duration-200"
          newTab={true}
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          variant="outline"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-red-500 group-active:fill-current group-hover:fill-white transition duration-250"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3 group-hover:text-gray-800/0 transition duration-200">Watch video</span>
        </Button>
      </div>

      <FeaturesIndustry />
    </Container>
  )
}
