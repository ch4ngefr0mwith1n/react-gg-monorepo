import './styles.css'
import useBattery from "./useBattery.jsx";
import Battery from "./Battery.jsx";

export default function App() {
    const {loading, level, charging, chargingTime, dischargingTime} =
        useBattery();

    return (
        <>
            <div className="wrapper">
                <h1>useBattery</h1>
                {!loading ? (
                    <Battery
                        level={level * 100}
                        charging={charging}
                        chargingTime={chargingTime}
                        dischargingTime={dischargingTime}
                    />
                ) : (
                    <h2>Loading...</h2>
                )}
            </div>
        </>
    );
}
