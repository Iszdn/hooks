import React, { useState } from 'react'

function useCount() {
    const [count, setCount] = useState(0)

    function increaseCount() {
        setCount(p=>p+1)
    }
    function decreaseCount() {
        setCount(p=>p-1)
    }
  return [count,increaseCount,decreaseCount]
}

export default useCount