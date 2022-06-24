export default function Post({item:{mission_name, launch_year, mission_patch_small}}) {
    return (
        <div>
            <h2>- {mission_name} - {launch_year}</h2>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
}
