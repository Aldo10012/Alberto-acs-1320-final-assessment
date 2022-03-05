import './Like.css'
import react, { useState } from 'react'


function Like() {
    const [num, setNum] = useState(0)

    const IncrementItem = () => {
        setNum(Number(num) + 1);
    }
    
    const DecreaseItem = () => {
        setNum(Number(num) - 1);
    }

    let handleChange = (e)=>{
        setNum(e.target.value);
    }



    return(
        <div className='Like'>
            <button type="button" onChange={DecreaseItem}>-1</button>

            <h2 value={num}>{num}</h2>
            <input type="text" className="form-control" value={num} onChange={handleChange}/>

            <button type="button" onChange={IncrementItem}>+1</button>
        </div>
    )
}

export default Like