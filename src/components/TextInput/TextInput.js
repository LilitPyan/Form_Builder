import './TextInput.css';
import React from 'react';
const TYPES = {
  COMPONENT : 'component',
};
const TextInput = ({component}) => (
  <div className='text_input' id={component}>
    <label>Text Input</label>
    <br/>
    <input type='text'/>
    <button className='text_input_btn'>Edit</button>
    <button className='text_input_btn'>Delete</button>
  </div>
);



export default TextInput;