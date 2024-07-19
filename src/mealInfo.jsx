import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
function MealInfo(props){
    const [recipe,setRecipe] = useState({});
    const {mealid} = useParams();
    async function about(){
    //    try{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const data = await res.json();
        console.log(data);
        setRecipe(data.meals[0])
    //    }
    //    catch(err){
    //     alert("error");
    //    }
    }
    if(mealid != ""){
        about();
    }
    return (
        <div className="container_info">
            <img className="img_meal" src={recipe.strMealThumb}/>
            <p>{recipe.strInstructions}</p>
            <NavLink to={"/"}><button className="btn">return</button></NavLink>
        </div>
    )
}

export default MealInfo;