import './styles.css'
import * as React from "react";
import useFetch from "./useFetch.jsx";
import Card from "./Card.jsx";

export default function App() {
    const [count, setCount] = React.useState(1);

    const {error, data} = useFetch(
        `https://pokeapi.co/api/v2/pokemon/${count}`
    );

    return (
        <section>
            <h1>useFetch</h1>
            <button
                disabled={count < 2}
                className="link"
                onClick={() => setCount((c) => c - 1)}
            >
                Prev
            </button>
            <button className="link" onClick={() => setCount((c) => c + 1)}>
                Next
            </button>
            <Card loading={!data} error={error} data={data}/>
        </section>
    );
}
