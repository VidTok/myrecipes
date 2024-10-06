import './App.css';
import Organizer from './Organizer.js';
import { useEffect, useState } from 'react';
import video from './mainVideo.mp4'


function App() {

  const myId = "d0f0211c";
  const myKey = "19d8aa51902b4c31394bd56f8cc7ac29";

  const [search, setSearch] = useState ('');
  const [recipes, setRecipes] = useState ([]);
  const [wordSubmitted, setWordSubmitted] = useState ('lunch');

  useEffect (() => {
    const getRecipe = async () => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${myId}&app_key=${myKey}`);
      const data = await response.json ();
      setRecipes (data.hits);
      console.log (data.hits)
    }
    getRecipe ();
  }, [wordSubmitted])

  const recipeSearch = (e) => {
    setSearch (e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted (search);
  }

  return (
    <div className='mainBlock'>

      <div>
        <video className='videoCover' autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className='headerContainer'>

        <div>        
          <h1>FIND YOUR BEST RECIPE</h1>
        </div>

        <div>
          <form className='searchContainer' onSubmit={finalSearch}>
            <input className='input' placeholder='type...' onChange={recipeSearch} value={search} />
            <button className='btn'>Find a recipe</button>
          </form>
        </div>



      </div>

      <div className='dishesContainer'>
        {recipes.map ((element, index) => (
          <Organizer 
          key={index} 
          label={element.recipe.label}
          cuisine={element.recipe.cuisineType}
          dish={element.recipe.dishType}
          time={element.recipe.totalTime}
          weight={element.recipe.totalWeight}
          calories={element.recipe.calories}
          fat={element.recipe.digest[0].total}
          carbs={element.recipe.digest[1].total}
          protein={element.recipe.digest[2].total}
          ingredients={element.recipe.ingredientLines}
          image={element.recipe.images.REGULAR.url}
          directions={element.recipe.url} />
        ))}
      </div>

    </div>
  );
}

export default App;
