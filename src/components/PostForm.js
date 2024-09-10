import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            addPost(content);
            setContent('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Напишите новый пост..."
            />
            <button type="submit">Добавить пост</button>
        </form>
    );
};

export default PostForm;
