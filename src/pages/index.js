import React, { useState, useEffect } from 'react';

import Layout from "@/components/layout"
import Seo from "@/components/seo"
import { Hero } from "@/components/homePage/Hero"
import { Features } from "@/components/homePage/Features"
import { Incentives } from "@/components/homePage/Incentives"
import { Partners } from "@/components/homePage/Partners"
import { Company } from "@/components/homePage/Company"
import { Testimonials } from "@/components/homePage/Testimonials"
import { Newsletter } from "@/components/layout/Newsletter"

import { useIntl } from "gatsby-plugin-intl";

const IndexPage = () => {

  // TODO: 补完 intl 配置
  const intl = useIntl();
  const hello = intl.formatMessage({ id: "hello" });

  // 下拉按钮
  const [isArrowVisible, setIsArrowVisible] = useState(true);
  const [animateArrow, setAnimateArrow] = useState(true);

  const handleArrowClick = () => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight / 2,
      behavior: 'smooth',
    });
    setIsArrowVisible(false);
  };

  const handleScroll = () => {
    const scrollThreshold = window.innerHeight * 0.125; // 比例阈值, 比如 10% 的窗口高度
    if (window.scrollY < scrollThreshold) {
      setIsArrowVisible(true);
      setAnimateArrow(true);
    } else {
      setIsArrowVisible(false);
      setAnimateArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <Layout url="">

    <Hero />
    {isArrowVisible && (
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
      <button 
        onClick={handleArrowClick} 
        className={`relative w-16 h-16 bg-gradient-to-t from-green-300 to-transparent rounded-full flex items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none ${animateArrow ? 'animate-bounce' : ''}`}
        onAnimationEnd={() => setAnimateArrow(false)}
      >
        <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </div>
    )}
    <Features />

    <Partners />
    <Company />

    <Incentives />
    <Testimonials />
    <Newsletter />

  </Layout>

}

export const Head = () => <Seo title="JSB Tech" />

export default IndexPage
