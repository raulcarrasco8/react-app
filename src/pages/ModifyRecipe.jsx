import { useParams } from "react-router-dom";
import ModRecipeForm from "../components/ModRecipeForm";

function ModifyRecipe({ onModify, recipeList }) {
  const { recipeId } = useParams();
  const recipe = recipeList.find((r) => r.id.toString() === recipeId);

  return <ModRecipeForm recipe={recipe} onModify={onModify} />;
}

export default ModifyRecipe;
