import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton(props) {
  
  const miFuncion = () => {
    
    props.setOpenModal(!props.openModal);
  }
  return (
    <button className={`CreateTodoButton`} onClick={miFuncion}>+</button>
  )

}

export { CreateTodoButton };
