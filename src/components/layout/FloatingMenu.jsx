import React from "react";

import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

const callsToAction = [
  { name: 'Self-Leveling', href: '#powders', icon: RectangleGroupIcon },
  { name: 'Concrete', href: '#powders', icon: RectangleGroupIcon },
  { name: 'Mortar & Plaster', href: '#powders', icon: RectangleGroupIcon },
  { name: 'Grouting', href: '#powders', icon: RectangleGroupIcon },
  { name: 'PCE Synthesizer', href: '/products/GDPC-5C', icon: ChevronDownIcon },
]

export function FloatingMenu() {
  return (
    <div className="w-full text-white pt-2.5 z-40 overflow-hidden hidden md:block">
      
      <div className="bg-white">
        {/* <div className="mx-auto max-w-7xl sm:px-8 lg:px-10"> */}
          <div className="bg-blue-100/20 truncate grid grid-cols-1 divide-y divide-gray-900/5 sm:grid-cols-5 sm:divide-x sm:divide-y-0 sm:border-x sm:border-gray-900/5">
            {callsToAction.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-x-2.5 p-3 px-6 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100 sm:justify-center sm:px-0"
              >
                <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                {item.name}
              </a>
            ))}
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}
