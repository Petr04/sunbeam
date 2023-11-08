'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function CopyableString({ className, children }) {
  const [showTick, setShowTick] = useState(false)

  return (
    <div
      className={`flex justify-between items-center overflow-hidden p-[20px] gap-[10px] text-gray-01 bg-gray-00 rounded-[20px] w-full cursor-pointer ${className}`}
      onClick={() => {
        navigator.clipboard.writeText(children)
          .then(() => {
            setShowTick(true)
            setTimeout(() => setShowTick(false), 1000)
          })
      }}
    >
      <div className="truncate overflow-hidden">
        {children}
      </div>

      <Image
        src={showTick ? '/check-gray-01.svg' : '/copy-03-gray-01.svg'}
        width={24} height={24}
        alt="copy"
      />
    </div>
  )
}
