import React, { useState } from 'react';
import './App.css';
import { sortableContainer, sortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

import Gif from './../DragInput/DragInput';
import HeaderText from "../HeaderText/HeaderText";
import TextInput from "../TextInput/TextInput";


const App = () => {

  const [gifs, setGifs] = useState([
    <HeaderText />,
    <TextInput />
  ]);
  const onSortEnd = ({ oldIndex, newIndex }) => setGifs(arrayMove(gifs, oldIndex, newIndex));
  const SortableGifsContainer = sortableContainer(({ children }) => <div className="gifs">{children}</div>);
  const SortableGif = sortableElement(({ gif }) => <Gif key={gif} gif={gif} />);

  return (
    <div className="App">
      <h1>Drag those GIFs around</h1>
      <h2>Set 1</h2>
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
  );
};

export default App;