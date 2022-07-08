import {Link, Route, Routes} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import PostPage from "./pages/PostPage";
import PostDetailsPage from "./pages/PostDetailsPage";


function App() {
  return (
    <div>
        <div>
          <h2>Menu</h2>
          <ul>
            <li><Link to={"/"}>home</Link></li>
            <li><Link to={"/layout"}>layout</Link></li>
            <li><Link to={"/about"}>about</Link></li>
          </ul>
        </div>
      <div>
        <h2>Content</h2>
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/layout'} element={<LayoutPage/>}>
                <Route path={'posts'} element={<PostPage/>}>
                    <Route path={'details'} element={<PostDetailsPage/>}/>
                </Route>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<PostPage/>}/>
                </Route>
            </Route>
            <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
