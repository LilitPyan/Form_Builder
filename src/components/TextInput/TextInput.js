import React from 'react';
import './TextInput.css';

export default function TextInput(props) {
    return (
      <div className = 'text_input'>
          <label>Text Input</label>
          <br/>
          <input type = 'text'/>
          <button className = 'text_input_btn'>Edit</button>
          <button className = 'text_input_btn'>Delete</button>
      </div>
    );
}