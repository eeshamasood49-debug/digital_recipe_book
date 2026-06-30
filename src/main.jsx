import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// Central CSS Connection (Light Theme)
import './styles/recipeStyles.css';

// Importing all 8 individual components directly here
import Header from './components/Header';
import CategoryTabs from './components/CategoryTabs';
import RecipeGrid from './components/RecipeGrid';
import RecipeCard from './components/RecipeCard';
import ServingsController from './components/ServingsController';
import IngredientChecklist from './components/IngredientChecklist';
import CookingTimer from './components/CookingTimer';
import ReviewStars from './components/ReviewStars';

const RECIPE_DATA = [
  {
    id: 1,
    title: "Fluffy Berry Pancakes",
    category: "Breakfast",
    time: 15,
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=60",
    ingredients: [
      { name: "Flour", amount: 0.5, unit: "cup" },
      { name: "Milk", amount: 0.4, unit: "cup" },
      { name: "Berries", amount: 0.2, unit: "cup" }
    ]
  },
  {
    id: 2,
    title: "Gourmet Avocado Toast",
    category: "Breakfast",
    time: 10,
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=500&auto=format&fit=crop&q=60",
    ingredients: [
      { name: "Bread Slices", amount: 1, unit: "pcs" },
      { name: "Avocado", amount: 0.5, unit: "pcs" },
      { name: "Egg", amount: 1, unit: "pcs" }
    ]
  },
  {
    id: 3,
    title: "Crispy Grilled Chicken Salad",
    category: "Lunch",
    time: 25,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
    ingredients: [
      { name: "Chicken Breast", amount: 100, unit: "grams" },
      { name: "Lettuce", amount: 1, unit: "cup" },
      { name: "Olive Oil", amount: 1, unit: "tbsp" }
    ]
  },
  {
    id: 4,
    title: "Glazed Lava Chocolate Cake",
    category: "Dessert",
    time: 20,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=60",
    ingredients: [
      { name: "Dark Chocolate", amount: 50, unit: "grams" },
      { name: "Butter", amount: 2, unit: "tbsp" },
      { name: "Sugar", amount: 3, unit: "tbsp" }
    ]
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('All');
  const [servingsMap, setServingsMap] = useState({ 1: 2, 2: 2, 3: 2, 4: 2 });

  const updateServings = (id, newServings) => {
    setServingsMap((prev) => ({ ...prev, [id]: newServings }));
  };

  const filteredRecipes = activeTab === 'All'
    ? RECIPE_DATA
    : RECIPE_DATA.filter(r => r.category === activeTab);

  return (
    <div className="app-container">
      <Header />
      <CategoryTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <RecipeGrid>
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            time={recipe.time}
            image={recipe.image}
          >
            <ServingsController
              servings={servingsMap[recipe.id]}
              setServings={(val) => updateServings(recipe.id, val)}
            />
            <IngredientChecklist
              ingredients={recipe.ingredients}
              servings={servingsMap[recipe.id]}
            />
            <CookingTimer initialMinutes={recipe.time} />
            <ReviewStars />
          </RecipeCard>
        ))}
      </RecipeGrid>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);