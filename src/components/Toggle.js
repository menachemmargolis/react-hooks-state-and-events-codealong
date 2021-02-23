import React, {useState} from "react";

function Toggle() {
  const [btn, setBtn] = useState('OFF')

  function changeDisplay(e){
     if(e.target.innerText === "ON"){setBtn( "OFF")}
     if(e.target.innerText === "OFF"){setBtn( "ON")}
  }

  return <button onClick = {changeDisplay} >{btn}</button>;
}

export default Toggle;

// The button should say "OFF" when it is first displayed
// When the button is clicked, it should say "ON"
// When the button is clicked again, it should say "OFF"
// etc