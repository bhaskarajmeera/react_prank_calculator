import React from 'react'

export const Button = ({cls,label,handleOnButtonClick}) => {
  return (<div onClick={()=> handleOnButtonClick(label)} className={"btn " +cls}>{label}</div>)
};
