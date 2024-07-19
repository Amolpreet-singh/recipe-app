import React from "react";
import Mainpage from "./mainpage";
import { Routes,Route } from "react-router-dom";
import MealInfo from "./mealInfo";
function App(){

  return (
   <Routes >
    <Route path="/" element={<Mainpage/>}></Route>
    <Route path="/:mealid" element={<MealInfo/>}></Route>
   </Routes>
  );
}

export default App;