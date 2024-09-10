import React from 'react';
import './Categories.css'; // Импортируем CSS файл

const Categories = ({ setActiveCategory }) => {
    return (
        <div className="categories">
            <h2>Категории</h2>
            <ul>
                {['posts', 'ml', 'analytics'].map((category, index) => (
                    <li key={index} onClick={() => setActiveCategory(category)}>
                        {category === 'posts' ? 'Посты' : category === 'ml' ? 'Интерфейс ML' : 'Аналитика'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
