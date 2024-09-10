import React, { useState } from 'react';
import Categories from './components/Categories'; // Импортируем компонент категорий
import PostForm from './components/PostForm'; // Импортируем компонент формы постов
import PostList from './components/PostList'; // Импортируем компонент списка постов
import People from './components/People'; // Импортируем компонент людей
import MLButtonComponent from './components/MLButtonComponent'; // Импортируем компонент ML
import Analytics from './components/Analytics'; // Импортируем компонент Аналитики
import './App.css';

const App = () => {
    const [activeCategory, setActiveCategory] = useState('posts'); // Состояние для активной категории
    const [posts, setPosts] = useState([]); // Состояние для постов

    const addPost = (newPost) => {
        setPosts([...posts, newPost]); // Добавляем новый пост в массив постов
    };

    return (
        <div className="app">
            <div className="sidebar">
                <Categories setActiveCategory={setActiveCategory} /> {/* Передаем функцию для изменения категории */}
            </div>
            <div className="main-content">
                {activeCategory === 'posts' ? ( // Условный рендеринг на основе активной категории
                    <>
                        <h1>Посты</h1>
                        <PostForm addPost={addPost} />
                        <PostList posts={posts} />
                    </>
                ) : activeCategory === 'ml' ? (
                    <>
                        <MLButtonComponent />
                    </>
                ) : activeCategory === 'analytics' ? (
                    <>
                        <Analytics />
                    </>
                ) : null}
            </div>
            <div className="people-list">
                <People />
            </div>
        </div>
    );
};

export default App;