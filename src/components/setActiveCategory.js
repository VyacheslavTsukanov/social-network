import React from 'react';

const Categories = ({ setActiveCategory }) => {
    return (
        <div className="categories">
            <h2>Категории</h2>
            <ul>
                {['Посты', 'Интерфейс ML', 'Аналитика'].map((category, index) => (
                    <li key={index} onClick={() => setActiveCategory(category.toLowerCase())}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;
