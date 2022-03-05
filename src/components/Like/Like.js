import './Like.css'
import react, { useState } from 'react'


function Like() {
    const [count, setCount] = useState(0)

    const IncrementItem = () => {
        setCount(count + 1);
    }
    
    const DecreaseItem = () => {
        setCount(count - 1);
    }

    return(
        <div className='Like'>
            <button onClick={DecreaseItem}>-1</button>
            <h2 value={count}>{count}</h2>
            <button type="button" onClick={IncrementItem}>+1</button>
        </div>
    )
}

export default Like