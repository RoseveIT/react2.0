export default function User({item, chosen}) {
    // let {item:{id, name, username, email, phone}} = props
    return (
        <div>
            <h2>{item.id} - {item.name} {item.username}</h2>
            <p>{item.email} <br/> {item.phone}</p>
            <button onClick={()=>{
                chosen(item);
            }}>info
            </button>
        </div>
    );
}