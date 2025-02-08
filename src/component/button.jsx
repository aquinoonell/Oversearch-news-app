import { useState } from "react";
import "bootstrap";

function MyButton() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div></div>
            <h1></h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p></p>
            </div>
            <p className="read-the-docs"></p>
        </>
    );
}

export default MyButton 
