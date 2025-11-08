import './styles.css'

function List() {
    const friends = [
        {id: 893, name: "Lynn"},
        {id: 871, name: "Alex"},
        {id: 982, name: "Ben"},
        {id: 61, name: "Mikenzi"}
    ];

    // return <ul></ul>;
    return (
        <ul className="list">
            {friends.map(({id, name}) => {
                return <li key={id}>{name}</li>
            })}
        </ul>
    );
}

export default function App() {
    return <List/>;
}