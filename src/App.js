import Users from "./components/users/Users";
import {useState} from "react";
import {getUserPosts} from "./services/users.api.service";
import './App.css'
import Posts from "./components/posts/Posts";

function App() {
    let [posts, setPosts] = useState([]);
    const elevate = (id) => {
        getUserPosts(id).then(({data}) =>{
            setPosts([...data])
        })
    }
  return (
    <div className={'df'}>
        <div className={'left'}><Users elevate={elevate}/></div>
        <div className={'right'}>
            <Posts posts={posts}/>
        </div>
    </div>);
}

export default App;
