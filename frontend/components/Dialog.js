'use client'

import './dialogStyle.css'
import { useRef, useEffect, useCallback, useImperativeHandle, forwardRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

function Dialog({ closeUrl, children }, ref) {
  const router = useRouter()
  const dialog = useRef(null)
  useEffect(() => {dialog.current.showModal()}, [])

  useImperativeHandle(ref, () => ({ closeDialog: () => dialog.current.close() }))
  
  return (
    <dialog
      ref={dialog}
      className="bg-gray-03 rounded-[40px] text-gray-02 z-50 w-[580px] shadow-md backdrop:bg-dim max-w-full"
      onClose={() => setTimeout(() => router.push(closeUrl, { scroll: false }), 300)}
    >
      <div
        onClick={e => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </dialog>
  )
}

export default forwardRef(Dialog)
