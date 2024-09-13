import React from 'react';
import './Categories.css'; // Импортируем CSS файл

const Categories = ({ setActiveCategory }) => {
    return (
        <div className="categories">
            <h2>Категории</h2>
            <ul>
                {['posts', 'ml', 'analytics', 'dashboard'].map((category, index) => (
                    <li key={index} onClick={() => setActiveCategory(category)}>
                    {category === 'posts' ? 'Посты' 
                    : category === 'ml' ? 'Интерфейс ML' 
                    : category === 'analytics' ? 'Аналитика' 
                    : category === 'dashboard' ? 'Дашборд' 
                    : category}
                </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
