import React, { useRef, useState } from "react";
import Info from "./info";
function Mainpage() {
  const [recipes, setRecipes] = useState([]);
  const inputRef = useRef();
  async function search(value, e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
      );
      const data = await res.json();
      console.log(data);
      setRecipes(data.meals)
    } catch (err) {
      alert("nodfacd")
    }
    
  }
  return (
    <div className="container">
      <div className="form">
        <form>
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter food name"
          ></input>
          <button
            className="button"
            onClick={(e) =>  search(inputRef.current.value, e)}
            type="submit"
          >
            search
          </button>
        </form>
      </div>
      <div className="content">
        {
          recipes.map((curr, ind) => (  
            <Info
              key={ind}
              className="recipe"
              img={recipes[ind].strMealThumb}
              name={recipes[ind].strMeal}
              id = {recipes[ind].idMeal}
            />
          ))
       }
      </div>
    </div>
  );
}

export default Mainpage;
