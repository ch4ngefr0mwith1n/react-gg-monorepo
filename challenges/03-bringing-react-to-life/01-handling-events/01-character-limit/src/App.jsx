import './styles.css'

export default function App() {

    const handleChange = (e) => {
        const text = e.target.value

        if (text.length > 10) {
            alert("Character limit exceeded")
        }
    }

    return (
        <section>
            <h1>Character Limit</h1>
            <input placeholder="Enter some text" onChange={handleChange}/>
        </section>
    );
}
