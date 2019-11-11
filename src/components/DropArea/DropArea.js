import {useDrop} from 'react-dnd';
import React from 'react';
import TextInput from './../TextInput/TextInput'
import {TYPES} from './../DragInput/DragInput';
import './DropArea.css'

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
        <TextInput/>
      )}
    </div>
  )
};
export default DropArea;


