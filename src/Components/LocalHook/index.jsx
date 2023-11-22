import React, { useEffect, useState } from 'react'

function useLocalStorage() {
    const [todo, setTodo] = useState(localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [])
    function addTodo() {
        setTodo([...todo,""])
    }
    useEffect(() => {
        localStorage.setItem(todo,JSON.stringify(todo))
        }, [todo])
  return [todo,addTodo]
}

export default useLocalStorage