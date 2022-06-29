export default function User({user, elevate}) {
    const onClick = () => {
        elevate(user.id)
    }
    return (<div>
            {user.name}
            <button onClick={onClick}>INFO</button>
        </div>
    );
}