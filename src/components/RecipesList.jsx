import { useState } from "react";
import RecipeItem from "./RecipeItem"
function RecipesList(props) {

  return (
    <>
      {props.recipeList.map((recipeObj) => {
        return (
          <RecipeItem
            key={recipeObj.id}
            recipeItem={recipeObj}
            onDelete={props.onDelete}     
          />
        );
      })}
    </>
  );
}

export default RecipesList;
