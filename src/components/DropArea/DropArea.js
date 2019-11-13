import {useDrop} from 'react-dnd';
import React from 'react';
import HeaderText from "../HeaderText/HeaderText"
import Gif, {TYPES} from './../DragInput/DragInput';
import './DropArea.css'
import { useState } from 'react';
import arrayMove from "array-move";
import {sortableContainer, sortableElement} from "react-sortable-hoc";


const DropArea = ({items}) => {
  const [, drop] = useDrop({
    accept: TYPES.ITEM,
    drop: () => ({}),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const selectComponent = ({item, index}) => {
    switch (item.id) {
      case 1:
        return <HeaderText />;
      case 2:
        return <TextInput />;
    }
  };

  const [gifs, setGifs] = useState([
    <HeaderText />,
    <TextInput />
  ]);
  const onSortEnd = ({ oldIndex, newIndex }) => setGifs(arrayMove(gifs, oldIndex, newIndex));
  const SortableGifsContainer = sortableContainer(({ children }) => <div className="gifs">{children}</div>);
  const SortableGif = sortableElement(({ gif }) => <Gif key={gif} gif={gif} />);


  return (
      <div ref = {drop} className = 'app_dropTarget'>
        {items.map((item, index) => selectComponent({item, index}))}
        <SortableGifsContainer axis="x" onSortEnd={onSortEnd}>
          {gifs.map((gif, i) =>
            <SortableGif
              // don't forget to pass index prop with item index
              index={i}
              key={gif}
              gif={gif}
            />
          )}
        </SortableGifsContainer>
      </div>
  )
};

export default DropArea;