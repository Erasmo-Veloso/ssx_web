import React from 'react'
import style from './Column.module.css'
import SubCard from '../SubCard/SubCard'
import { useDroppable } from '@dnd-kit/core'

const Column = ({ column, subs }) => {
    const { setNodeRef } = useDroppable({
        id: column.id
    })
  return (
    <div className={style.container} onDrop={()=> console.log("Alguma coisa")}>
      <h2 className={style.title}>{column.title}</h2>
      <div ref={setNodeRef} className={style.SubList}>
        {subs.map(sub =>{
            return <SubCard key={sub.id} sub={sub}/>
        })}
        
      </div>
    </div>
  )
}

export default Column
