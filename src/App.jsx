
import { useState } from 'react';
import './App.css'
import { Button } from './Button';
const operators = ["%","/","*","-","+"];
const App = () => {
  
  const [strToDisplay,setStrToDisplay] = useState("");
  const [lastOperator,setLastOperator] = useState("");

const buttonAction =(value) =>{

    //displayElm.classList.remove("prank");
if(value === "AC")
        {setStrToDisplay("");return;}
/* make c button work */
if(value== "C"){
  setStrToDisplay(strToDisplay.slice(0,-1));
return;
                }
/* equal but buuton operation work */
if(value=== "=" || value==="Enter"){
    setLastOperator("");
/* to get the last character for checking it operator  */
const lastChar = strToDisplay [strToDisplay.length-1];
/* check if operator is one of the operator is present in list of array */
if (operators.includes(lastChar))
    {
    setStrToDisplay(strToDisplay.slice(0,-1));
    }
    return displayTotal();
    }
/* show only last cicked operator */
 if(operators.includes(value)){
    setLastOperator(value);
    const lastChar = strToDisplay[strToDisplay.length-1];
    if(operators.includes(lastChar)){
        setStrToDisplay(strToDisplay.slice(0,-1) +value);
        return;
    }
    } 
  /*  only one dot need to be present in */

  if (value === "."){
    const lastOperatorIndex = strToDisplay.lastIndexOf(lastOperator);
    const lastNumebrSet = strToDisplay.slice(lastOperatorIndex);
    if (lastNumebrSet.includes(".")) {
      return;
    }

    if (!lastOperator && strToDisplay.includes(".")) {
      return;
    }
  }
setStrToDisplay(strToDisplay + value);
                                };

                                /* Total vallue calculated */
const displayTotal = () =>{
    const extraValue = randomValue();
    /* adding randomvalue  */
     if (extraValue) {
    //displayElm.classList.add("prank");
    //audio.play();
  }
  const total = eval(strToDisplay)+ extraValue;
    setStrToDisplay(total.toString());}; 
const randomValue =()=>{
const num = Math.round(Math.random()*10);
    return num<4 ? num:0;
}; 

const handleOnButtonClick = (value) =>{
    buttonAction(value);
    console.log(value);
  };

  const btns = [
    {cls:"btn-ac",label:"AC"},
    {cls:"btn-c",label:"C"},
    {cls:"btn-per",label:"%"},
    {cls:"btn-divide",label:"/"},
    {cls:"btn-7",label:"7"},
    {cls:"btn-8",label:"8"},
    {cls:"btn-9",label:"9"},
    {cls:"btn-multi",label:"*"},
    {cls:"btn-4",label:"4"},
    {cls:"btn-5",label:"5"},
    {cls:"btn-6",label:"6"},
    {cls:"btn-minus",label:"-"},
    {cls:"btn-1",label:"1"},
    {cls:"btn-2",label:"2"},
    {cls:"btn-3",label:"3"},
    {cls:"btn-plus",label:"+"},
    {cls:"btn-0",label:"0"},
    {cls:"btn-dot",label:"."},
    {cls:"btn-equal",label:"="},
  ];
  return (
    <>
<div className="wrapper flex-center">
    <div className="calculator">
    <div className="display arbutus-regular">{strToDisplay||"0.00"}</div>
    {btns.map((btn,i) =>(<Button  key={i} cls={btn.cls} label={btn.label} handleOnButtonClick ={handleOnButtonClick}/>))}
    </div>
</div>
    </>
  )
};
export default App
