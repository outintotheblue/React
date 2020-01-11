import React, {useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = '16dbaec5';
  const APP_KEY = 'a3eb0a3870856a2c586f19c0089d7d19'

  const [recipes, setRecipes] = useState([]); 
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
 useEffect(() => {
   getRecipes();
  }, [query]);

  const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  );
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data.hits);
  }
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');

}
  return ( 
    <div className= 'App'> 
      <form onSubmit = {getSearch} className = 'search-form'>
      <input className = 'search-bar' type = 'text' value = {search} onChange = {updateSearch} />
      <button className = 'search-button' type = 'submit'> Search </button>
      </form>
      <div className ='recipes'>
      {recipes.map(recipe => (
          <Recipe
            key = {recipe.recipe.label}
            title = {recipe.recipe.label} 
            calories = {Math.floor(recipe.recipe.calories)} 
            img = {recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
            /> 
            ))}
            </div>
     </div>
    );
}

export default App;
