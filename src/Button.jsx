import React from 'react'

export const Button = ({cls,label,handleOnButtonClick,OnMouseDown,isMouseDown}) => {
  return (<div 
    Style={isMouseDown === label ? {
    transform: isMouseDown?'scale(0.8)':'scale(1)',transition:"0.3s",
  } :null} 
    OnMouseDown = {() =>OnMouseDown(label)} 
    onClick={()=> handleOnButtonClick(label)} 
    className={"btn " +cls}>{label}
    </div>)
};
