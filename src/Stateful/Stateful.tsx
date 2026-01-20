import { useState } from "react";
import Stateless from "../Stateless/Stateless"

    const Stateful = () => {
    const [count, setCount] = useState(0)


    const increment = () => {
        setCount(prev => prev + 1)
    };

     return (
    <>
        <button onClick={increment}>
        count is {count}
        </button>
        
        <Stateless
            text={`count is: ${count}`}
            onClick={() => alert(`count is: ${count}`)}
        />
    </>
    );
    
};

export default Stateful;