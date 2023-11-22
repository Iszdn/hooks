import React, { useEffect, useState } from 'react'
import useLocalStorage from '../LocalHook'

function LocalStorage() {

// const [todo, setTodo] = useState(localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [])
const [todo, setTodo] = useLocalStorage()

// useEffect(() => {
// localStorage.setItem(todo,JSON.stringify(todo))
// }, [todo])
// function addTodo() {
//     setTodo([...todo,"salam"])
// }

  return (
    <div>
        <button onClick={setTodo}>add</button>
        <div>{todo.map(x=> <li>{x}</li>)}</div>
    </div>
  )
}

export default LocalStorage