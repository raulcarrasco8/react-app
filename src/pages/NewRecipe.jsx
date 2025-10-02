import { useParams, Link } from "react-router-dom";
import RecipeForm from "../components/RecipeForm"

function NewRecipe(props) {

  return (
    <>
      <RecipeForm onCreate={props.onCreate}>
      </RecipeForm>
    </>
  );
}
export default NewRecipe;
