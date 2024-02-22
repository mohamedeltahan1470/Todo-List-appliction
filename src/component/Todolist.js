import  React ,{ useState } from 'react';
import shortid from "shortid";
import "./TodoStyle.css";



const Todolist = ( props) => {
    const [text , setText]=useState("");
    const handleSubmit=(e) =>{
        e.preventDefault();
        props.onSubmit({
            id : shortid.generate(), 
            text : text, 
            complete : false,
        });
        setText("");
    };
  return (
    <form onSubmit={handleSubmit}>
        <input className='input-field' type='text' onChange={(e)=>setText(e.target.value)} value={text}/>
        <button className='btn' onClick={handleSubmit}>Add Todo</button>
    </form>
  )
}

export default Todolist;