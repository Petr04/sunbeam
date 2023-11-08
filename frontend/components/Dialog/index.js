'use client'

import './style.css'
import { useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export default function Dialog({ closeUrl, showDialog, children, className, style }) {
  const router = useRouter()
  const dialog = useRef(null)

  useEffect(() => {
    if (showDialog) {
      if (!dialog.current.open) {
        dialog.current.showModal()
        document.body.classList.add('overflow-hidden')
      }
    } else {
      dialog.current.close()
      document.body.classList.remove('overflow-hidden')
    }
  }, [showDialog])
  
  return (
    <dialog
      ref={dialog}
      className={twMerge('dark:bg-gray-03 rounded-[40px] dark:text-gray-02 z-50 shadow-md backdrop:bg-dim max-w-full', className)}
      onClose={() => {
        if (closeUrl)
          setTimeout(() => router.push(closeUrl, { scroll: false }), 300)
      }}
      style={style}
    >
      {children}
    </dialog>
  )
}
