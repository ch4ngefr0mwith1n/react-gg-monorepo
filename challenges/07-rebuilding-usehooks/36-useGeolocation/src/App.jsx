import './styles.css'
import useGeolocation from "./useGeolocation.jsx";
import Demo from "./Demo.jsx";

function Location() {
    const state = useGeolocation();

    if (state.loading) {
        return <p>loading... (you may need to enable permissions)</p>;
    }

    if (state.error) {
        return <p>Enable permissions to access your location data</p>;
    }

    return <Demo state={state}/>;
}

export default function App() {
    return (
        <section>
            <h1>useGeolocation</h1>
            <Location/>
        </section>
    );
}
