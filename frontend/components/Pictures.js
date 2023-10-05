'use client'

import Masonry from '@mui/lab/Masonry'
import Picture from '@/components/Picture'
import { useState, useEffect, useCallback } from 'react'

export default function Pictures({ pictures }) {
  const [columns, setColumns] = useState(3);

  const changeColumns = useCallback(() => {
    if (window.innerWidth < 700)
      setColumns(1)
    else if (window.innerWidth < 1100)
      setColumns(2)
    else
      setColumns(3)
  }, [])

  useEffect(() => {
    changeColumns()
    window.addEventListener('resize', changeColumns)
    return () => window.removeEventListener('resize', changeColumns)
  }, [changeColumns])

  return (
    <Masonry
      className="w-full m-0"
      columns={columns}
      spacing={2.5}
    >
      {pictures.data.map((picture, i) => <Picture {...picture} key={i} />)}
    </Masonry>
  )
}
