import {useDrop} from 'react-dnd';
import React from 'react';

import {TYPES} from '../DraggableInput/DraggableInput';

import '../App/App.css';

const DropArea = ({items}) => {
  const [, drop] = useDrop({
    accept: TYPES.ITEM,
    drop: () => ({}),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div ref={drop} className='app_dropTarget'>
      {items.map((item) =>
        <p>{item.id}</p>
      )}
    </div>
  )
};
export default DropArea;

