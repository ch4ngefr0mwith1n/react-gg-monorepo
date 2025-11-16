import './styles.css'
import * as React from "react";
import {useState} from "react";

export default function App() {
    // const mode = "dark";
    const [mode, setMode] = useState("dark")

    const handleClick = setMode(mode == "light" ? "dark" : "light")

    return (
        <main className={mode}>
            {/*{mode === "light" ? (*/}
            {/*    <button onClick={() => setMode("dark")}>Activate Dark Mode</button>*/}
            {/*) : (*/}
            {/*    <button onClick={() => setMode("light")}>Activate Light Mode</button>*/}
            {/*)}*/}
            <button onClick={handleClick}/>
        </main>
    );
}
