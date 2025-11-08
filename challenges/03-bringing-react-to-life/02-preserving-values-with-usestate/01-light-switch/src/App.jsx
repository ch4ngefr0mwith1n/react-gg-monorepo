import './styles.css'
import * as React from "react";

export default function App() {
    // const mode = "dark";
    const [mode, setMode] = React.useState("dark");

    return (
        <main className={mode}>
            {mode === "light" ? (
                <button onClick={() => setMode("dark")}>Activate Dark Mode</button>
            ) : (
                <button onClick={() => setMode("light")}>Activate Light Mode</button>
            )}
        </main>
    );
}
