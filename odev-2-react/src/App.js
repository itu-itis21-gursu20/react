import {useState, useEffect} from 'react';
import './App.css';
import Form from "./components/Form"
import TodoList from './components/TodoList';
import Footer from './components/Footer'

function App() {
  const [todos, setTodos]=useState([]);
  const [status, setStatus]= useState('');
  const [filteredTodos, setFilteredTodos]= useState([]);

  useEffect( () => {

    const filterHandler = () => {
      switch(status){
        case 'completed' : 
        setFilteredTodos(todos.filter( (todo) => todo.completed === true)) // completed olanları aldık
        break;
        case 'active' :
          setFilteredTodos(todos.filter( (todo) => todo.completed === false)) // completed olmayanları aldık
        break;
        default:
          setFilteredTodos(todos) // filtrelenmeden kaldı
      }
    }

    filterHandler();  // ilk paramda bu fonku çalıştırdık 

  }, [todos, status]) // todos ve statusu izliyoruz
 

  return (
    <div className='todoapp'>
      
      <Form 
        todos={todos} 
        setTodos={setTodos} 
        todo={todos.todo}
      />

      <ul className='todo-list'>
        {filteredTodos.map( (todo) => (
          <TodoList 
          status={status}
          key={todo.id}
          todo={todo}
          text={todo.text}
          todos={todos}
          setTodos={setTodos}
          /> )
        )

        }

      </ul>

      <Footer 
        status= {status}
        setStatus={setStatus}
        todos={todos}
        setTodos={setTodos}
      />
      
    </div>
  )
}

export default App