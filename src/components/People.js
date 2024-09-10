import React, { useState } from 'react';
import './People.css';

const People = () => {
    const [searchTerm, setSearchTerm] = useState('');

   const people = [
        { id: 1, name: 'Alice', image: 'https://example.com/alice.jpg' },
        { id: 2, name: 'Bob', image: 'https://example.com/bob.jpg' },
        { id: 3, name: 'Charlie', image: 'https://example.com/charlie.jpg' },
    ];

    // Фильтруем людей по имени на основе поискового запроса
    const filteredPeople = people.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="people">
            <h2>People</h2>
            <input
                type="text"
                placeholder="Поиск..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
            />
            {filteredPeople.map(person => (
                    <li key={person.id} className="person">
                        <img src={person.image} alt={person.name} className="person-image" />
                        <span>{person.name}</span>
                    </li>
                ))}    
        </div>
    );
};

export default People;

