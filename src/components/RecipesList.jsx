import { useState } from "react";
import recipes from "../assets/recipes.json";

function RecipesList() {
  const [recipesList, setRecipesList] = useState(recipes);
  const deleteRecipe = (recipeId) => {
    console.log(recipeId);
    const newRecipelist = recipesList.filter((recipeDetails) => {
      if (recipeDetails.id !== recipeId) {
        return true;
      } else {
        return false;
      }
    });
    setRecipesList(newRecipelist);
  };
  return (
    <>
      {recipesList.map((recipeObj) => {
        return (
          <div key={recipeObj.id}>
            <h2>{recipeObj.name}</h2>
            <div className="receta">
              <img
                src={recipeObj.image}
                style={{ border: "1px solid red", maxWidth: "200px" }}
              ></img>
              <div>
                <p>Calories: {recipeObj.calories}</p>
                <p>Serving: {recipeObj.servings}</p>
              </div>
              {recipeObj.calories > 400 ? (
                <div>PRECAUCION COMIDA CALORICA</div>
              ) : (
                <div> COMIDA BAJA EN CALORIAS</div>
              )}
              <button onClick={() => { deleteRecipe(recipeObj.id); }} >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default RecipesList;
