import { useState } from "react";
import './todo.css';

export default function Todo({ item, onUpdate, onDelete }) {
  
  const[isEdit, setIsEdit] = useState(false);

  function FormEdit(){

    const[newValue, setNewValue] = useState(item.title);

    function handleSubmit(e){
      e.preventDefault();
    }

    function handleChange(e){
      const value = e.target.value;
      setNewValue(value);

    }
    function handleClickUpdateTodo(){
      if(newValue.trim().length <= 1) return;
      onUpdate(item.id,newValue);

      setIsEdit(false);

    }

    return <form className="todoUpdateForm" onSubmit={handleSubmit}>
      <input type="text" className="todoInput" onChange={handleChange} value={newValue}></input>
      <button className="button" onClick={handleClickUpdateTodo}>Actualizar</button>
    </form>
  }

  function TodoElement(){
    return <div className="todoInfo">
      <p>{item.title}</p> <button className="editar" onClick={()=> setIsEdit(true)}>Editar</button>
                    <button className="borrar" onClick={()=>{onDelete(item.id)}}>Borrar</button>

    </div>
  }
  
    return (

        <div className="todo">

        {isEdit ? <FormEdit /> : <TodoElement />}
        </div>

    
  );
}
