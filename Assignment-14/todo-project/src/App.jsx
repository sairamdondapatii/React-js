import React, { useReducer } from 'react'
import AddTodoItems from './Components/AddTodoItems'
import Todo from './Components/Todo'



const initialTodo = [
  {id:1,title:'react',status:false},
  {id:2,title:'javascript',status:false},
  {id:3,title:'html',status:false},
]

function todoReducerFunction(state,action){
  switch (action.type) {
    case 'ADD_TODO':
      return [...state,{id:Date.now() ,title:action.payload, status:false}]
    case 'UPDATE_TODO':
      return state.map((todo)=>{
        return todo.id === action.payload ? {...todo,status:!todo.status} : todo;
      })
    case 'DELETE_TODO':
      return state.filter((todo)=>{
        return todo.id !== action.payload;
      })
    default:
      return state;
  }
}

const App = () => {
  const [todos,dispatch] = useReducer(todoReducerFunction,initialTodo)
  function todoUpdate(id){
    dispatch({type:'UPDATE_TODO',payload:id})
    
  }
  
  function todoDelete(id){
    dispatch({type:'DELETE_TODO',payload:id})
  }

  function addTask(title){
    dispatch({type:'ADD_TODO',payload:title})
  }

  return (
    <div>
      <h1>Todo Items</h1>
      <AddTodoItems addTask = {addTask}/>
      <ul>
        {
          todos.map((todo)=>{
            return <Todo key={todo.id} {...todo} todoUpdate={todoUpdate} todoDelete = {todoDelete}/>
          })
        }
      </ul>
    </div>
  )
}

export default App