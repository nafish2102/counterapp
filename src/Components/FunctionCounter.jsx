import React, {useState} from "react";

function FunctionCounter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => {
        if(count > 0) {
            setCount(count - 1);
        }
    }
    return(
        <div className="counter">
            <h1>Funtion Component</h1>
            <h2>{count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default FunctionCounter;