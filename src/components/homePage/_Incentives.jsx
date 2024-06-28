import React from 'react';

const incentives = [
    {
      name: 'Request a Sample',
      description: "Experience our excellence: Test our products in your setting.",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-delivery-light.svg',
    },
    {
      name: 'Expert Support',
      description: 'Our professional customer service offers technical support, guiding you through every step.',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-chat-light.svg',
    },
    {
      name: 'Extended Warranty',
      description: "Enjoy peace of mind with our multi-year warranty, ensuring long-term reliability.",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-light.svg',
    },
    {
      name: 'Join Our Network',
      description: "Become a part of our global family. Collaborate with us in shaping the future of PCE products.",
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    },
  ]
  
  export function Incentives() {
    return (
      <div className="bg-gray-50 pt-4">
        <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-22 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-0 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {incentives.map((incentive) => (
              <div key={incentive.name}>
                <img src={incentive.imageSrc} alt="" className="mt-10 h-24 w-auto" />
                <h3 className="mt-6 text-sm font-medium text-gray-900">{incentive.name}</h3>
                <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  