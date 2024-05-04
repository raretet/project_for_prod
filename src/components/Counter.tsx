import React, { useState } from 'react';
import s from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div className={s.number}>
            <button onClick={increment}>+1</button>
            <h1>{count}</h1>
        </div>
    );
};

