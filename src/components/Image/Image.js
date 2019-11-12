import React from 'react';
import './Image.css';

export default function Image(props) {
    return (
      <div className = 'image'>
        <label>Image</label>
        <br/>
        <input type = 'image'/>
        <button className = 'image_btn'>Edit</button>
        <button className = 'image_btn'>Delete</button>
      </div>
    );
}

