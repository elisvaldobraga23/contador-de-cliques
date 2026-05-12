import { useState } from "react";
import "../styles/Contador.css"


export function Contador(){
    const [count, setCount] = useState(0)

    const incrementarContador =() => {
        setCount(count + 1)
    }

    return (
        <>
            <section>
                <h1>Contador: {count}</h1>
                <button onClick={incrementarContador}>Clique aqui!</button>
            </section>
        </>
    )

}