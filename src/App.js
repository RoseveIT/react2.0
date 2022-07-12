import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout/MainLayout";
import TodosPage from "./pages/TodosPage";
import AlbumPage from "./pages/AlbumPage";
import CommentsPage from "./pages/CommentsPage";
import {PostsCurrentComment} from "./components/posts/PostsCurrentComment";

function App() {
  return (<div>

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'albums'} element={<AlbumPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<PostsCurrentComment/>}/>
                </Route>
            </Route>
        </Routes>

    </div>
  );
}

export default App;
