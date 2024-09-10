import React from 'react';
import './Categories.css'; // Импортируем CSS файл

const categories = [
    'Интерфейсы',
    'Графический дизайн',
    'Фотография',
    'Веб-аналитика',
];

const Categories = () => {
    return (
        <div className="categories">
            <h2>Категории</h2>
            <ul>
                {categories.map((category, index) => (
                    <li key={index}>{category}</li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
