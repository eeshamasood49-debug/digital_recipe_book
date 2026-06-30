import React from 'react';

export default function RecipeCard({ title, image, time, children }) {
    return (
        <div className="recipe-card">
            <img src={image} alt={title} className="recipe-img" />
            <div className="recipe-content">
                <div>
                    <h3>{title}</h3>
                    <span className="time-badge">⏱️ Cook Time: {time} mins</span>
                </div>
                {children}
            </div>
        </div>
    );
}