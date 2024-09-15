import React from 'react';
import Card from './Card';
import './Dashboard.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <h2>Карточки</h2>
            <div className="cards">
                <Card title="Продажи" value="$10,000" />
                <Card title="Пользователи" value="1,200" />
                <Card title="Заказы" value="300" />
            </div> <br />
            <div className="cards">
                <Card title="Продажи" value="$10,000" />
                <Card title="Пользователи" value="1,200" />
                <Card title="Заказы" value="300" />
            </div>
        </div>
    );
};

export default MainContent;
