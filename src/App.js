import React, { useState } from 'react';
import Categories from './components/Categories';
import People from './components/People';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './App.css';

const App = () => {
    const [posts, setPosts] = useState([]);

    const addPost = (content) => {
        setPosts([...posts, content]);
    };

    return (
        <div className="app">
            <div className="sidebar">
                <Categories />
            </div>
            <div className="main-content">
                <h1>Посты</h1>
                <PostForm addPost={addPost} />
                <PostList posts={posts} />
            </div>
            <div className="people-list">
                <People />
            </div>
        </div>
    );
};

export default App;
