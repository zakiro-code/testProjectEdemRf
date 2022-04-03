import React, {useEffect, useState} from "react";
import {usePosts} from "../hooks/useHooks";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../Components/UI/button/MyButton";
import MyModal from "../Components/UI/MyModal/MyModal";
import PostForm from "../Components/PostForm";
import PostFilter from "../Components/PostFilter";
import PostList from "../Components/PostList";
import Pagination from "../Components/UI/pagination/Pagination";
import Loader from "../Components/UI/Loader/Loader";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: '', query: ''});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(1);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(filter.sort, posts, filter.query);


    const [fetchPosts, isPostLoading, postError] = useFetching(async (limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    })

    useEffect(() => {
        fetchPosts(limit, page);
    }, []);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const changePage = (page) => {
        setPage(page);
        fetchPosts(limit, page);
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
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts JS'}/>
            {isPostLoading && <div style={{display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader/></div>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />

        </div>
    );
}

export default Posts;
