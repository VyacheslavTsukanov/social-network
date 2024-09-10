import React from 'react';

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts.length === 0 ? (
                <p>Нет постов.</p>
            ) : (
                posts.map((post, index) => (
                    <div key={index} className="post">
                        {post}
                    </div>
                ))
            )}
        </div>
    );
};

export default PostList;
