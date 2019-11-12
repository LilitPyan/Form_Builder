import React from 'react';
import './HeaderText.css';

export default function HeaderText(props) {
    return (
      <div className = 'header_text'>
        <label>Header Text</label>
        <br/>
        <input type = 'text'/>
        <button className = 'header_text_btn'>Edit</button>
        <button className = 'header_text_btn'>Delete</button>
      </div>
    );
}

