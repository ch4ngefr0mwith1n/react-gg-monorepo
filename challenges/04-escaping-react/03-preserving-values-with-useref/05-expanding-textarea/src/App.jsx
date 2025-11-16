import './styles.css'
import * as React from "react";
import {useEffect, useRef, useState} from "react";

export default function ExpandingTextarea() {
    const [text, setText] = useState("")
    const textAreaRef = useRef(null)

    const handleChange = (event) => {
        setText(event.target.value)
        // automatski smanjuje textarea nakon što obrišemo upisani tekst
        textAreaRef.current.style.height = "inherit";

        const scrollHeight = textAreaRef.current.scrollHeight;
        textAreaRef.current.style.height = scrollHeight + "px";
    }

    return (
        <section className="container">
            <h1>Expanding Textarea</h1>
            <label htmlFor="textarea">Enter or paste in some text</label>
            <textarea
                id="textarea"
                placeholder="Enter some text"
                value={text}
                onChange={handleChange}
                rows={1}
                ref={textAreaRef}
            />
        </section>
    );
}
