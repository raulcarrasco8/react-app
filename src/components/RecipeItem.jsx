import { Link } from "react-router-dom";
import { Button } from "@mantine/core";

function Recipe(props) {
  return (
    <div key={props.recipeItem.id}>
      <h2>{props.recipeItem.name}</h2>
      <div className="receta">
        <img
          src={props.recipeItem.image}
          style={{ border: "1px solid red", maxWidth: "200px" }}
        />
        <div>
          <p>Calories: {props.recipeItem.calories}</p>
          <p>Serving: {props.recipeItem.servings}</p>
        </div>
        {props.recipeItem.calories > 400 ? (
          <div>PRECAUCION COMIDA CALORICA</div>
        ) : (
          <div>COMIDA BAJA EN CALORIAS</div>
        )}

        <Link to={`/recipe/${props.recipeItem.id}`}>
          <Button variant="filled" color="orange" size="xl" radius="lg" style={{ marginRight: "5px" }}>
            More Details
          </Button>
        </Link>

        <Button
          onClick={() => props.onDelete(props.recipeItem.id)}
          variant="light"
          color="red"
          size="xl"
          radius="lg"
          style={{ marginRight: "5px" }}
        >
          Delete
        </Button>

        <Link to={`/modify/${props.recipeItem.id}`}>
          <Button variant="light" color="blue" size="xl" radius="lg">
            Modify
          </Button>
        </Link>
      </div>
    </div>
  );
}
export default Recipe;
