import './styles.css'

// We have a Badge component with variables for name, handle and img that are unassigned. Your job is to assign those variables in the JSX so that the component renders correctly.
//
// Tasks
// Give the image a proper alt tag using the author's name
// Make sure the badge displays the profile image correctly
// Display the author's name in the badge's heading
// Display the author's handle below the heading

function Badge() {
    const name = "Tyler McGinnis";
    const handle = "tylermcginnis";
    const img = "https://avatars0.githubusercontent.com/u/2933430";

    return (
        <div className="badge">
            <img alt={name} src={img}/>
            <div>
                <h4>{name}</h4>
                <p>{handle}</p>
            </div>
        </div>
    );
}

export default function App() {
    return <Badge/>;
}