import { useState } from 'react'

function Footer( {todos, setTodos, status, setStatus} ) {

    const uncompleted = Array.isArray(todos) ? todos.filter( (todo) => todo.completed == false) : null
    const completed = Array.isArray(todos) ? todos.filter( (todo) => todo.completed == true) : null
  
    const clearCompleted = (e) => { 
        e.preventDefault();
        setTodos(todos.filter( (todo) => todo.completed == false)) // uncompletedlar todos arrayinde kaldı completedlar silindi
    }

    const clickStyle= (e)=> {
        setStatus(e.target.id)
        
    }

    return (
        <footer className="footer">
            <span className="todo-count"><strong>{uncompleted.length}</strong> items left</span>
            <ul className="filters">
                <li>
                     <a onClick={clickStyle} className={ (status==='all') ? 'selected' : ''} id="all">All</a>   
                </li>
                <li>
                     <a onClick={clickStyle} className={ (status==='active') ? 'selected' : ''} id="active">Active</a>   
                </li>
                <li>
                     <a onClick={clickStyle} className={ (status==='completed') ? 'selected' : ''} id="completed">Completed</a>   
                </li>
            </ul>

            <button className={completed==0 ? "hidden" : "clear-completed"} onClick={clearCompleted}>Clear completed</button> 
            {/* completed öge yoksa bu clear completed butonu gözükmez varsa gözükür */}
        </footer>
    )
}

export default Footer