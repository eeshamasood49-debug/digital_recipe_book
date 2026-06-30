import React, { useState } from 'react';

export default function ReviewStars() {
    const [rating, setRating] = useState(0);
    return (
        <div className="stars-row">
            {[1, 2, 3, 4, 5].map((star) => (
                <span
                    key={star}
                    className={`star ${star <= rating ? 'active' : ''}`}
                    onClick={() => setRating(star)}
                >
                    ★
                </span>
            ))}
        </div>
    );
}