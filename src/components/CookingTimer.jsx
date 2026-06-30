import React, { useState, useEffect } from 'react';

export default function CookingTimer({ initialMinutes }) {
    const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive && secondsLeft > 0) {
            interval = setInterval(() => {
                setSecondsLeft((time) => time - 1);
            }, 1000);
        } else if (secondsLeft === 0) {
            setIsActive(false);
        }
        return () => clearInterval(interval);
    }, [isActive, secondsLeft]);

    const formatTime = () => {
        const mins = Math.floor(secondsLeft / 60);
        const secs = secondsLeft % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="timer-box">
            <span>🔔 Step Timer: <strong>{formatTime()}</strong></span>
            <button className="timer-btn" onClick={() => setIsActive(!isActive)}>
                {isActive ? 'Pause' : 'Start'}
            </button>
        </div>
    );
}