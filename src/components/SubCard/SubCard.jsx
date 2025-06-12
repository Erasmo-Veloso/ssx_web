import React from 'react'
import style from './SubCard.module.css'
import { useDraggable } from '@dnd-kit/core'

const SubCard = ({ sub }) => {
    const {attributes, listeners, setNodeRef, transform}= useDraggable({
        id: sub.id
    })

    const tranStyle = transform ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`
    }: undefined;
  return (
    <div ref={setNodeRef} {...listeners} {...attributes}className={style.card} style={tranStyle}>
      <h3 className={style.title}>{sub.title}</h3>
    </div>
  )
}

export default SubCard
