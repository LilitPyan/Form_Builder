import {useDrag} from 'react-dnd';
import React from 'react';

import './DragInput.css';

export const TYPES = {
  ITEM: 'item',
};

const DragInput = ({item, addItem}) => {
  const [, drag] = useDrag({
    item: {...item, type: TYPES.ITEM},
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        addItem(item);
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div ref = {drag} className = 'app_dragItem'>
      {item.name}
    </div>
  )
};

export default DragInput;
