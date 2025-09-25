import { Link } from "react-router-dom";

function Recipe(props) {
  return (
    <div key={props.recipeItem.id}>
      <h2>{props.recipeItem.name}</h2>
      <div className="receta">
        <img
          src={props.recipeItem.image}
          style={{ border: "1px solid red", maxWidth: "200px" }}
        ></img>
        <div>
          <p>Calories: {props.recipeItem.calories}</p>
          <p>Serving: {props.recipeItem.servings}</p>
        </div>
        {props.recipeItem.calories > 400 ? (
          <div>PRECAUCION COMIDA CALORICA</div>
        ) : (
          <div> COMIDA BAJA EN CALORIAS</div>
        )}
        <Link to={`/recipe/${props.recipeItem.id}`}>
          <button> More Details</button>
        </Link>
        <button
          onClick={() => {
            props.onDelete(props.recipeItem.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default Recipe;
