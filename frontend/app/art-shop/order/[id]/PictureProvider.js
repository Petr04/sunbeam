'use client'

import { createContext, useContext } from 'react'

const PictureContext = createContext()

export function usePictureContext() {
  return useContext(PictureContext)
}

export default function PictureProvider({ value, children }) {
  return (
    <PictureContext.Provider value={value}>
      {children}
    </PictureContext.Provider>
  )
}
