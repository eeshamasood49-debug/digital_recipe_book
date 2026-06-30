import React from 'react';

export default function ServingsController({ servings, setServings }) {
    return (
        <div className="servings-row">
            <span>Servings:</span>
            <button className="ctrl-btn" onClick={() => setServings(Math.max(1, servings - 1))}>-</button>
            <span>{servings}</span>
            <button className="ctrl-btn" onClick={() => setServings(servings + 1)}>+</button>
        </div>
    );
}