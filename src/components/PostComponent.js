import {Link, useNavigate} from 'react-router-dom'

export default function PostComponent({post}) {
    let navigator = useNavigate();
    return (
        <div>
            {post.title} - <span><Link to={'details'} state={{...post}}>details</Link></span>
        </div>
    );
}