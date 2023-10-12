'use client'

import './dialogStyle.css'
import { useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Dialog({ closeUrl, showDialog, setShowDialog, children, className, style }) {
  const router = useRouter()
  const dialog = useRef(null)
  useEffect(() => {
    setShowDialog(true)
  }, [])
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
      className={`bg-gray-03 rounded-[40px] text-gray-02 z-50 shadow-md backdrop:bg-dim max-w-full ${className}`}
      onClose={() => setTimeout(() => router.push(closeUrl, { scroll: false }), 300)}
      style={style}
    >
      {children}
    </dialog>
  )
}
