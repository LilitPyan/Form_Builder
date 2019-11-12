import React from 'react';
import './MultiLineInput.css';

export default function MultiLineInput(props) {
    return (
      <div className = 'multi_line_input'>
        <label>Multi-line Input</label>
        <br/>
        <input type = 'label'/>
        <button className = 'multi_line_input_btn'>Edit</button>
        <button className = 'multi_line_input_btn'>Delete</button>
      </div>
    );
}

