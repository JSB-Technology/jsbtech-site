import React from "react";

import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

const callsToAction = [
  { name: 'Self-leveling', href: '#powders', icon: RectangleGroupIcon },
  { name: 'Flowing Floor Screeds', href: '#powders', icon: RectangleGroupIcon },
  { name: 'Non-Shrink Grouts', href: '#powders', icon: RectangleGroupIcon },
  { name: 'Mortar', href: '#powders', icon: RectangleGroupIcon },
  { name: 'PCE-Synth Machine', href: '#machine', icon: ChevronDownIcon },
]

export function FloatingMenu() {
  return (
    <div className="fixed top-20 left-0 w-full text-white py-2 shadow-md z-50 hidden md:block">
      
      <div className="bg-gray-50 mt-10">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 divide-y divide-gray-900/5 sm:grid-cols-5 sm:divide-x sm:divide-y-0 sm:border-x sm:border-gray-900/5">
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
        </div>
      </div>
    </div>
  );
}
