import React, { useState } from 'react'
import './../App.css'
import { useDrop } from 'react-dnd'
import {TYPES} from './DraggableInput'

const DropArea = ({items}) => {
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: TYPES.ITEM,
    drop: () => ({}),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })
  
  return (
    <div ref={drop} className='app_dropTarget'>
      {items.map((item) =>
            	<p>{item.id}</p>
            )}
    </div>
  )
}
export default DropArea

