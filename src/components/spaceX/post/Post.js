export default function Post(props) {
    let {flight_number, mission_name, launch_year} = props
    return (
        <div>
            <h2>{flight_number} - {mission_name} - {launch_year}</h2>
        </div>
    );
}