import { useParams, Link } from "react-router-dom";

function ItemDetails(props) {
  const { recipeId } = useParams();
  const recipe = props.recipeList.find((recipeItem) => {
    return recipeItem.id === Number(recipeId);
  });
  return (
    <>
      <h1>ITEM DETAILS</h1>
      <h2>{recipe.name}</h2>
      <div className="itemdetails">
        <div className="calories">
          <p>Calories: {recipe.calories}</p>
        </div>
        <div className="servings">
          <p>Servings: {recipe.servings}</p>
        </div>
      </div>
    </>
  );
}
export default ItemDetails;
