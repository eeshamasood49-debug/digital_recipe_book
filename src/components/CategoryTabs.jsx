import React from 'react';

export default function CategoryTabs({ activeTab, setActiveTab }) {
    const tabs = ['All', 'Breakfast', 'Lunch', 'Dessert'];
    return (
        <div className="tabs-container">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => setActiveTab(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
}