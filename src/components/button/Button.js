import React from 'react';

const Button = props => {
  return (
    <button onClick={props.changeText}>Click to change text</button>
  )
};

export default Button;
