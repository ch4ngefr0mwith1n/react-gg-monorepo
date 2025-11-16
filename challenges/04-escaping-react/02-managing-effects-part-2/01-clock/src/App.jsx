import './styles.css'
import * as React from "react";
import {useEffect} from "react";

export default function Clock() {
    // const time = null;
    // if (time === null) return null;
    const [time, setTime] = React.useState(null)

    // useEffect(() => {
    //     window.setInterval(setTime(new Date()), 1000);
    // }, [time]);

    // u ovom slučaju se u "setInterval" prosljeđuje definicija anonimne funkcije, ne treba nam njen poziv
    useEffect(() => {
        const timerID = window.setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            window.clearInterval(timerID);
        };
    }, []);

    return (
        <section>
            <h1>Current Time</h1>
            <p>{time.toLocaleTimeString()}</p>
        </section>
    );
}
