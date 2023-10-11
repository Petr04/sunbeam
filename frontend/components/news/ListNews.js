'use client'

import Masonry from '@mui/lab/Masonry'
import ItemOfListNews from './ItemOfListNews';
import { useState, useEffect, useCallback } from 'react'

export default function ListNews({ news }) {
  const [columns, setColumns] = useState(3);

  const changeColumns = useCallback(() => {
    if (window.innerWidth < 700)
      setColumns(1)
    else if (window.innerWidth < 1180)
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
      {news.data.map((one_new, i) => <ItemOfListNews {...one_new} key={i} />)}
    </Masonry>
  )
}