import { useParams, Link } from "react-router-dom";

function ItemDetails(props) {
  const { recipeId } = useParams();
  const recipe = props.recipeList.find((recipeItem) => {
    return recipeItem.id === recipeId;
  });
  return (
    <>
      <h1>ITEM DETAILS</h1>
      <h1>{recipe.name}</h1>
    </>
  );
}
export default ItemDetails;
