'use client'

import { createContext, useContext } from 'react'

const PicturesContext = createContext()

export function usePicturesContext() {
  return useContext(PicturesContext)
}

export default function PicturesProvider({ value, children }) {
  return (
    <PicturesContext.Provider value={value}>
      {children}
    </PicturesContext.Provider>
  )
}
