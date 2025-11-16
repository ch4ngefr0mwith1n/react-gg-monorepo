import * as React from "react";
import {useState} from "react";

export default function App() {
    // const count = 0;
    const [count, setCount] = useState(0)

    const handleIncrement = () => setCount(count + 1)
    const handleDecrement = () => setCount(count - 1)

    // function handleIncrement() {
    //     setCount(count + 1)
    // }
    //
    // function handleDecrement() {
    //     setCount(count - 1)
    // }

    return (
        <main>
            <span>{count}</span>
            <div>
                <button onClick={handleDecrement}>-</button>
                <button onClick={handleIncrement}>+</button>
            </div>
        </main>
    );
}