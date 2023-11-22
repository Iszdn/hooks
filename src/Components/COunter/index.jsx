import useCount from '../CounHook/countHook'

function Counter() {
    const [count,increaseCount,decreaseCount] = useCount(0)
    const [count2,increaseCount2,decreaseCount2] = useCount(0)
    
  return (
    <div>
        <button onClick={increaseCount}>+</button>
        <p>{count}</p>
        <button onClick={decreaseCount}>-</button>
        <hr />
        <button onClick={increaseCount2}>+</button>
        <p>{count2}</p>
        <button onClick={decreaseCount2}>-</button>
    </div>
  )
}

export default Counter