import { getTodaysDate } from "./utils";

function Today() {
    const today = getTodaysDate()

    return <p>{today}</p>;
}

export default function App() {
    return <Today />;
}