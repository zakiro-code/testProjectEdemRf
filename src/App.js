import React, {useEffect, useMemo, useRef, useState} from "react";
import Counter from "./Components/Counter";
import './styles/App.css';
import PostItem from "./Components/PostItem";
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/select/MySelect";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal";
import {usePosts} from "./hooks/useHooks";
import axios from "axios";
import PostGet from "./API/PostService";
import PostService from "./API/PostService";
import Loader from "./Components/UI/Loader/Loader";
import {useFetching} from "./hooks/useFetching";
import {getCount, getPageCount} from "./utils/pages";

function App() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(filter.sort, posts, filter.query);

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })
    console.log(totalPages);

    useEffect(() => {
        fetchPosts();
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

  return (
    <div className="App">
        <button onClick={fetchPosts}>GET POSTS</button>
        <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
            Create new user
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        {postError && <h1>{postError}</h1>}
        {isPostLoading
            ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader/></div>
            : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts ab0ut JS'}/>
        }

    </div>
  );
}

export default App;
