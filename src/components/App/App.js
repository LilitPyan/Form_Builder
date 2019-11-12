import HTML5Backend from 'react-dnd-html5-backend';
import {DndProvider} from 'react-dnd';
import React from 'react';

import DragInput from "../DragInput/DragInput";
import DropArea from '../DropArea/DropArea.js';

import './App.css';

const ITEMS = [
  {
    id: 1,
    name: 'Header Text',
  },
  {
    id: 2,
    name: 'Label'
  },
  {
    id: 3,
    name: 'Paragraph'
  },
  {
    id: 4,
    name: 'Line Break'
  },
  {
    id: 5,
    name: 'Dropdown'
  },
  {
    id: 6,
    name: 'Checkbox'
  },
  {
    id: 7,
    name: 'Multiple Choice'
  },
  {
    id: 8,
    name: 'Text Input'
  },
  {
    id: 9,
    name: 'Number Input'
  },
  {
    id: 10,
    name: 'Multi-line Input'
  },
  {
    id: 11,
    name: 'Image'
  },
];

export default class App extends React.Component {
  state = {
    items: []
  };

  addItem = (item) => {
    this.setState({
      items: [
        ...this.state.items,
        item
      ]
    });
    console.log(item);
  };

  render() {
    return (
      <DndProvider backend={HTML5Backend}>
        <div className='app_main_container'>
          <div className='app_header'>
            <p className='app_form_header'>React Form Builder</p>
            <button className='app_header_btn'>Preview Form</button>
          </div>
          <div className='app_container'>
            <div className='app_dropTarget'>
              <DropArea items={this.state.items}/>
            </div>
            <div className='app_draggableItem'>
              <p className='app_toolbox_header'>Toolbox</p>
              <ul className='app_ul_container'>
                {ITEMS.map((item, index) =>
                  <DragInput key={item.id} item={item} addItem={this.addItem}/>
                )}
              </ul>
            </div>
          </div>
        </div>
      </DndProvider>
    )
  }
}