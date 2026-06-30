import React, { useState } from 'react';

export default function IngredientChecklist({ ingredients, servings }) {
    const [checkedItems, setCheckedItems] = useState({});

    const toggleCheck = (index) => {
        setCheckedItems((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <div className="checklist-section">
            <h4>Ingredients Needed:</h4>
            {ingredients.map((item, idx) => (
                <label key={idx} className={`ingredient-item ${checkedItems[idx] ? 'checked' : ''}`}>
                    <input
                        type="checkbox"
                        checked={!!checkedItems[idx]}
                        onChange={() => toggleCheck(idx)}
                    />
                    <span>
                        {(item.amount * servings).toFixed(1)} {item.unit} {item.name}
                    </span>
                </label>
            ))}
        </div>
    );
}