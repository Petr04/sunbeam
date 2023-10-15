'use client'

import ItemOfListOurPrograms from './ItemOfListOurPrograms';

export default function ListOurPrograms({ ourPrograms }) {
  return (
    <div className="
            mx-auto grid grid-cols-3 gap-4
            lt:gap-0
            lg:grid-cols-2 lg:gap-4
            mg:grid-cols-1
    ">
      {ourPrograms.data.map((ourProgram, i) => <ItemOfListOurPrograms {...ourProgram} key={i} />)}
    </div>
  )
}