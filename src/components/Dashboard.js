// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';

const Dashboard = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Загружаем события из локального хранилища при монтировании компонента
        const storedEvents = JSON.parse(localStorage.getItem('analyticsEvents')) || [];
        setEvents(storedEvents);
    }, []);

    const logEvent = (event) => {
        const newEvents = [...events, event];
        setEvents(newEvents);
        localStorage.setItem('analyticsEvents', JSON.stringify(newEvents));
    };

    return (
        <div>
           <h2>Аналитика событий</h2>
            <button onClick={() => logEvent({ type: 'BUTTON_CLICK', timestamp: Date.now() })}>
                Нажми меня
            </button>
            <h3>События:</h3>
            <ul>
                {events.map((event, index) => (
                    <li key={index}>
                        {event.type} - {new Date(event.timestamp).toLocaleString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;



/*

    ▎Объяснение кода
    1. Состояние и эффекты: Мы используем useState для хранения событий и useEffect для загрузки событий из локального хранилища при монтировании компонента.
    2. Логирование событий: Функция logEvent добавляет новое событие в массив событий и сохраняет его в локальном хранилище.
    3. Отображение событий: Мы отображаем список событий, которые были зафиксированы.

    ▎Расширение функционала
    Вы можете расширить функционал вашей аналитики, добавив:
    - Отслеживание других типов событий (например, навигация по страницам).
    - Фильтрацию и сортировку событий.
    - Экспорт данных в CSV или другой формат.
    - Интеграцию с сервером для хранения данных на бэкенде.

*/