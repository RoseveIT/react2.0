import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Menu</h2>
            <div><Link to={'todos'}>todos</Link></div>
            <div><Link to={'albums'}>albums</Link></div>
            <div><Link to={'comments'}>comments</Link></div>
        </div>
    );
}

export {Header}