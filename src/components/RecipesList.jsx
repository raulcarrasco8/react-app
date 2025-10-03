import { useState } from "react";
import RecipeItem from "./RecipeItem"
import { Button } from '@mantine/core';
import { Link } from "react-router-dom";

function RecipesList(props) {

  return (
<>  
  <Link to="/new">
    <Button
      fullWidth
      variant="light" 
      color="pink" 
      size="lg" 
      radius="lg"
    >CREATE RECIPE</Button>
  </Link>   
      {props.recipeList.map((recipeObj) => {
        return (
          <RecipeItem
            key={recipeObj.id}
            recipeItem={recipeObj}
            onDelete={props.onDelete}
            onModify={props.onModify}     
     
          />
        );
      })}
    </>
  );
}

export default RecipesList;
